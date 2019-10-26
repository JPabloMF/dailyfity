import React from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormatPaint from '@material-ui/icons/FormatPaint';
import Language from '@material-ui/icons/Language';

import logo from '../../assets/img/dailfitylogo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    appbar: {
      backgroundColor: 'white',
      borderRadius: '0px 0px 10px 10px'
    },
    icons: {
      color: '#a5b1c2',
      margin: ' 0 2px'
    },
    themeOptions: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      margin: '0 5px'
    },
    menuItemOptionsContainer: {
      display: 'flex'
    }
  })
);

export default function Header() {
  const classes = useStyles();
  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const isThemeMenuOpen = Boolean(anchorElTheme);
  const isLangMenuOpen = Boolean(anchorElLang);

  const handleThemeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleLanguajeMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setAnchorElTheme(null);
  };

  const handleLangMenuClose = () => {
    setAnchorElLang(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenuTheme = (
    <Menu
      anchorEl={anchorElTheme}
      getContentAnchorEl={null}
      elevation={3}
      id={menuId}
      keepMounted
      open={isThemeMenuOpen}
      onClose={handleThemeMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
    >
      <div className={classes.menuItemOptionsContainer}>
        <MenuItem
          className={classes.themeOptions}
          style={{ backgroundColor: '#333945' }}
          onClick={handleThemeMenuClose}
        />
        <MenuItem
          className={classes.themeOptions}
          style={{ backgroundColor: '#a5b1c2' }}
          onClick={handleThemeMenuClose}
        />
      </div>
    </Menu>
  );

  const renderMenuLanguaje = (
    <Menu
      anchorEl={anchorElLang}
      getContentAnchorEl={null}
      elevation={3}
      id={menuId}
      keepMounted
      open={isLangMenuOpen}
      onClose={handleLangMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
    >
      <div className={classes.menuItemOptionsContainer}>
        <MenuItem onClick={handleLangMenuClose}>ES</MenuItem>
        <MenuItem onClick={handleLangMenuClose}>EN</MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img alt="test" src={logo} width="120px" />
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-label="Change language"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleLanguajeMenuOpen}
            className={classes.icons}
            color="inherit"
          >
            <Language />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Change theme"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleThemeMenuOpen}
            className={classes.icons}
            color="inherit"
          >
            <FormatPaint />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenuTheme}
      {renderMenuLanguaje}
    </div>
  );
}
