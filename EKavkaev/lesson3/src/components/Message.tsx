import React from 'react';
import { Avatar, Box, makeStyles, Paper } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

const Message: React.FC<MessageProps> = ({item}) => { 
    const classes = useStyles();
    const color = item.author?.length ? classes.orange: classes.purple;
    return (
        <Box m={2} display='flex' justifyContent={item.author?.length ? 'flex-end': 'flex-start'}>
            <Paper elevation={1} >
                <Box py={1} px={2} display='flex' flexDirection={item.author?.length ? 'row-reverse' : 'row'}>
                    <Avatar sizes='small' className={color}>{item.author?.length ? item.author[0].toUpperCase() : 'bot' }</Avatar>
                    <Box mx={1} display='flex' alignItems='center'>{item.text}</Box>
                </Box>
            </Paper>
        </Box>);
};

export { Message };