import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Chat from '@material-ui/icons/Chat';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
        <Toolbar>
          <Chat className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Simple Header
          </Typography>
        </Toolbar>
    </AppBar>
  );
}