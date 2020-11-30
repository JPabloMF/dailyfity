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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {
      marginBottom: '10px',
      backgroundColor: 'white'
    },
    panelDetailContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    panelDetailContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    panelSummary:{
      pointerEvents: 'none'
    }
  })
);

interface Props {
  name: string;
  quantity: Array<string>;
  considerations: Array<string>;
  image: string;
}

export default function Exercise({
  name,
  quantity,
  considerations,
  image,
}: Props) {
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
          aria-label={name}
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={<span />}
          label={name}
          className={classes.panelSummary}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.panelDetailContainer}>
          <div className={classes.panelDetailContent}>
            <h3>Quantity</h3>
            <ul>
              {quantity.map((data, dataIndex) => (
                <li key={dataIndex}>{data}</li>
              ))}
            </ul>
          </div>
          <div className={classes.panelDetailContent}>
            <h3>Considerations</h3>
            <ul>
              {considerations.map((data, dataIndex) => (
                <li key={dataIndex}>{data}</li>
              ))}
            </ul>
          </div>
          {image && (
            <img
              src={require(`../../../../assets/exercises/${image}`)}
              alt={name}
            />
          )}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
