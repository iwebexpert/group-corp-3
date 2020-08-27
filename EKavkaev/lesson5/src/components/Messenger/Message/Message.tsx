import React from 'react';
import { Avatar, Box, makeStyles, Paper, Typography, Grid, colors } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    caption: {
      color: colors.cyan[600],
      fontSize: '10pt'
    }
  }));

const Message: React.FC<MessageProps> = ({item}) => { 
    const classes = useStyles();
    const isAuthor = item.author?.length;
    return (
        <Box my={1} display='flex' justifyContent={isAuthor ? 'flex-end': 'flex-start'}>
            <Paper elevation={1} >
                <Box py={1} px={2} display='flex' flexDirection={isAuthor ? 'row-reverse' : 'row'}>
                    <Grid container>
                      <Grid xs={12}>
                        <Typography variant='body1' className={classes.caption} align={isAuthor ? 'right' : 'left'}>{item.author??'Bot'}</Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography variant='body1' align={isAuthor ? 'right' : 'left'}>{item.text}</Typography>
                      </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>);
};

export default Message;