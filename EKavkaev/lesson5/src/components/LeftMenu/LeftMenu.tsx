
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
    const elements = [1, 2, 3];
    const listItems = elements.map(s => 
    <ListItem button divider>
        <ListItemIcon>
            <Chat />
        </ListItemIcon>
        <ListItemText primary={`Chat ${s}`} />
    </ListItem>);
    
    return(
        <List component="nav" className={classes.leftMenu}>
            {listItems}
        </List>
      );
}