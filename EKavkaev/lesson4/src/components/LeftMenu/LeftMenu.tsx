
import React from 'react';
import { makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import Chat from '@material-ui/icons/Chat';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  leftMenu: {
    backgroundColor: theme.palette.background.paper,
    height: "100%",
  }
}));

export default function LeftMenu() {
    const classes = useStyles();

    return(
        <List component="nav" className={classes.leftMenu}>
            <ListItem button>
                <ListItemIcon>
                    <Chat />
                </ListItemIcon>
                <ListItemText primary="Chat 1" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Chat />
                </ListItemIcon>
                <ListItemText primary="Chat 2" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Chat />
                </ListItemIcon>
                <ListItemText primary="Chat 3" />
            </ListItem>
        </List>
      );
}