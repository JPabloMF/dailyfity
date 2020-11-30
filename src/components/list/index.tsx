import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Check from '@material-ui/icons/Check';
import ExerciseCategory from './exerciseCategory';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& .MuiExpansionPanelSummary-content': {
        alignItems: 'center',
      },
    },
    panel: {
      marginBottom: '20px !important',
    },
    panelDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
    checkbox: {
      '& .MuiIconButton-label': {
        backgroundColor: (props: any) =>
          props.checked ? '#26de81' : 'transparent',
        borderRadius: '10px',
        padding: '3px',
        border: (props: any) =>
          props.checked ? '3px solid #26de81' : '3px solid grey',
      },
      color: (props: any) => (props.checked ? 'white' : 'transparent'),
    },
    secondaryHeading: {
      fontSize: '15px',
      height: '21px',
      marginRight: '50px',
      color: '#a3a7ac',
      [theme.breakpoints.down('sm')]: {
        marginRight: '10px',
      },
    },
    darkPanel: {
      backgroundColor: '#a1b3c4',
      '& .MuiFormControlLabel-label.Mui-disabled': {
        color: 'black',
      },
    },
    whiteText: {
      color: 'white',
    },
  })
);

interface Props {
  day: string;
  name?: string;
  muscles: Array<object>;
  checked: boolean;
  indexWeek: number;
  indexRoutine: number;
  data: Array<any>;
  setData: any;
  passedDay: boolean;
  passedWeek: boolean;
}

export default function List({
  day,
  name,
  muscles,
  checked,
  indexWeek,
  indexRoutine,
  data,
  setData,
  passedDay,
  passedWeek,
}: Props) {
  const classes = useStyles({ checked });

  const handleCheck = (indexWeek: number, indexRoutine: number) => {
    const modifiedData = [...data];
    let checked = modifiedData[indexWeek].routines[indexRoutine].checked;
    modifiedData[indexWeek].routines[indexRoutine].checked = !checked;
    setData(modifiedData);
  };

  const panelStyle = passedDay || passedWeek ? classes.darkPanel : '';

  const textStyle = passedDay || passedWeek ? classes.whiteText : '';

  return (
    <div className={classes.root}>
      <ExpansionPanel className={`${classes.panel} ${panelStyle}`}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label={day}
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox
                color="default"
                className={classes.checkbox}
                checked={checked}
                checkedIcon={<Check />}
                onClick={() => handleCheck(indexWeek, indexRoutine)}
                disabled={passedDay || passedWeek}
              />
            }
            label={day}
          />
          {muscles &&
            muscles.map((muscle: any, indexMuscle: number) => (
              <Typography
                key={indexMuscle}
                className={`${classes.secondaryHeading} ${textStyle}`}
              >
                {muscle.name}
              </Typography>
            ))}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          {muscles &&
            muscles.map((muscle: any, indexMuscle: number) => (
              <ExerciseCategory
                key={indexMuscle}
                exerciseName={muscle.name}
                exercises={muscle.exercises}
              />
            ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
