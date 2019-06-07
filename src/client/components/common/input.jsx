import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing(1),
    },
  }));

const RoomCreationForm = (props) => {   
    const classes = useStyles();

    return (
        <div>
            <p>couc</p>
            <div className={classes.container}>
            <Input
                value="casdf"
                className={classes.input}
                inputProps={{
                    'aria-label': 'Description',
                }}
                />
            </div>
        </div>
    );
}

export default RoomCreationForm;