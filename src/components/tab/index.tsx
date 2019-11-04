import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "transparent",
    width: "60%",
    paddingTop: "10px",
    margin: "auto",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
    "& .PrivateTabIndicator-colorPrimary-98": {
      backgroundColor: "transparent"
    },
    "& .Mui-selected": {
      color: "#fff",
      backgroundColor: "#924bd6",
      boxShadow: "0px 2px 3px 2px #a55eea8c"
    }
  },
  tab: {
    marginRight: "50px",
    backgroundColor: "#c68bff",
    color: "#e1e1e1",
    boxShadow: "0px 2px 3px 2px #a55eea5c",
    borderColor: "transparent",
    outlineColor: "transparent",
    textDecoration: "none",
    borderRadius: "10px",
    [theme.breakpoints.down('sm')]: {
      marginRight: "5px",
      marginLeft: "5px"
    }
  },
  tabsContainer: {
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundColor: "transparent",
    height: "55px"
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.tabsContainer}
        position="static"
        color="default"
      >
        <Tabs
          className={classes.tabsContainer}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label="Flex week" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Week 1" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Week 2" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Flex week
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Week 1
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Week 2
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
