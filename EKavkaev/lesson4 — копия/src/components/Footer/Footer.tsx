import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    color: '#fff'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Typography variant="body1" className={classes.footer} align="center" gutterBottom>
          Simple Footer 2020
        </Typography>
      </footer>
  );
}