import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      width: '60%',
      paddingTop: '10px',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
      '& .PrivateTabIndicator-colorPrimary-98': {
        backgroundColor: 'transparent'
      },
      '& .Mui-selected': {
        color: '#fff !important',
        backgroundColor: '#924bd6',
        boxShadow: '0px 2px 3px 2px #a55eea8c'
      },
      '& .MuiTabs-flexContainer': {
        justifyContent: 'space-evenly'
      }
    },
    tab: {
      maxWidth: '200px !important',
      backgroundColor: '#c68bff',
      color: '#e1e1e1 !important',
      boxShadow: '0px 2px 3px 2px #a55eea5c',
      borderColor: 'transparent',
      outlineColor: 'transparent',
      textDecoration: 'none',
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        marginRight: '5px',
        marginLeft: '5px'
      }
    },
    tabsContainer: {
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
      backgroundColor: 'transparent',
      height: '55px'
    }
  })
);
