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
import Exercise from './exercise';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {
      marginBottom: '10px',
      backgroundColor: '#d0d0d02b',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)',
      '&::before': {
        backgroundColor: 'transparent',
      },
    },
    panelDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface ExerciseI {
  name: string;
  quantity: Array<string>;
  considerations: Array<string>;
  img: string;
}

interface Props {
  exerciseName: string;
  exercises: Array<ExerciseI>;
}

export default function ExerciseCategory({ exerciseName, exercises }: Props) {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          aria-label={exerciseName}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={<span />}
          label={exerciseName}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        {exercises.map((exercise, exerciseIndex) => (
          <Exercise
            key={exerciseIndex}
            name={exercise.name}
            quantity={exercise.quantity}
            considerations={exercise.considerations}
            image={exercise.img}
          />
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
