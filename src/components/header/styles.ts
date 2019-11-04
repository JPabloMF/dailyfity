import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
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
      borderRadius: '100%',
      margin: '0 5px',
      [theme.breakpoints.down('sm')]: {
        width: '10px',
        height: '10px'
      }
    },
    menuItemOptionsContainer: {
      display: 'flex'
    }
  })
);
