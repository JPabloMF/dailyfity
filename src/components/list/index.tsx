import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& .MuiExpansionPanelSummary-content': {
        alignItems: 'center'
      }
    },
    panel: {
      marginBottom: '20px !important'
    },
    checkbox: {
      '& .MuiIconButton-label': {
        boxShadow: '0px 2px 3px 2px #a55eea8c',
        borderRadius: '5px',
        padding: '3px'
      }
    },
    secondaryHeading: {
      fontSize: '15px',
      height: '21px',
      marginRight: '50px',
      color: '#a3a7ac',
      [theme.breakpoints.down('sm')]: {
        marginRight: '10px'
      }
    }
  })
);

interface Props {
  day: string;
  name?: string;
  muscles: Array<object>;
  checked: boolean;
}

export default function List({ day, name, muscles, checked }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
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
              />
            }
            label={day}
          />
          {muscles &&
            muscles.map((muscle: any, indexMuscle: number) => (
              <Typography
                key={indexMuscle}
                className={classes.secondaryHeading}
              >
                {muscle.name}
              </Typography>
            ))}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            The click event of the nested action will propagate up and expand
            the panel unless you explicitly stop it.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}