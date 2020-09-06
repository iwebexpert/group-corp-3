import React from 'react';
import {Messenger} from '../Messenger';
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import './Layout.css';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Layout = () => {
    const classes = useStyles();
    const chats = [
        {title: 'Chat 1', id: '1'},
        {title: 'Chat 2', id: '2'},
        {title: 'Chat 3', id: '3'},
        {title: 'Chat 4', id: '4'},
    ];
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header title="Header"/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ChatList chats={chats}/>
                </Grid>
                <Grid item xs={6}>
                    <Messenger/>
                </Grid>
            </Grid>
        </div>
    );
};