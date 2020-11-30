import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import TabsMU from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface DataObject {
  title: string,
  routines: Array<Object>
}

interface Props {
  children?: React.ReactNode;
  setValue: any;
  value: number;
  theme: any;
  data: Array<DataObject>;
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export default function Tabs({
  children,
  setValue,
  value,
  theme,
  data,
}: Props) {
  const classes = useStyles();

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
        <TabsMU
          className={classes.tabsContainer}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {data.length &&
            data.map((week, indexWeek) => (
              <Tab
                className={classes.tab}
                label={week.title}
                {...a11yProps(indexWeek)}
              />
            ))}
        </TabsMU>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {children}
      </SwipeableViews>
    </div>
  );
}
