import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        // width: 200,
      },
    },
  }),
);

const EmailForm = () => {
  const classes = useStyles();
  return (
    // <Contain
    <form className={classes.root} noValidate={true} autoComplete="off">
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} md={6}>
          <TextField id="first-name" label="First Name" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextField id="last-name" label="Last Name" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField id="email-address" label="Email Address" fullWidth={true} variant="outlined" />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField id="email-subject" label="Subject" fullWidth={true} multiline={true} rows={8} variant="outlined" />
        </Grid>
        
      </Grid>
      
{/*       

      <div>
        <TextField error={true} id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          error={true}
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error={true}
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error={true}
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error={true}
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          error={true}
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div> */}
    </form>
  )
}

export default EmailForm;
