import React, { useState, MouseEvent, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormatPaint from '@material-ui/icons/FormatPaint';
import Language from '@material-ui/icons/Language';
import { useStyles } from './styles';

import logo from '../../assets/img/dailfitylogo.png';

export default function Header() {
  const classes = useStyles();

  const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);

  const isThemeMenuOpen = Boolean(anchorElTheme);
  const isLangMenuOpen = Boolean(anchorElLang);

  const handleThemeMenuOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorElTheme(event.currentTarget);

  const handleLanguajeMenuOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorElLang(event.currentTarget);

  const handleThemeMenuClose = () => setAnchorElTheme(null);

  const handleLangMenuClose = () => setAnchorElLang(null);

  const renderMenu = (
    anchorEl: HTMLElement | null,
    id: string,
    open: boolean,
    onClose: any,
    anchorOrigin: any,
    transformOrigin: any,
    children: ReactNode
  ) => (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      elevation={3}
      id={id}
      keepMounted
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      {children}
    </Menu>
  );

  const childTheme = (
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
  );

  const childLang = (
    <div className={classes.menuItemOptionsContainer}>
      <MenuItem onClick={handleLangMenuClose}>ES</MenuItem>
      <MenuItem onClick={handleLangMenuClose}>EN</MenuItem>
    </div>
  );

  const menuAlignOptions = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img alt="test" src={logo} width="120px" />
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-label="Change language"
            aria-controls="languajeMenu"
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
            aria-controls="themeMenu"
            aria-haspopup="true"
            onClick={handleThemeMenuOpen}
            className={classes.icons}
            color="inherit"
          >
            <FormatPaint />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu(
        anchorElTheme,
        'themeMenu',
        isThemeMenuOpen,
        handleThemeMenuClose,
        menuAlignOptions.anchorOrigin,
        menuAlignOptions.transformOrigin,
        childTheme
      )}
      {renderMenu(
        anchorElLang,
        'languajeMenu',
        isLangMenuOpen,
        handleLangMenuClose,
        menuAlignOptions.anchorOrigin,
        menuAlignOptions.transformOrigin,
        childLang
      )}
    </div>
  );
}
