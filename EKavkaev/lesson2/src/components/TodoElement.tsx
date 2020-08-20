import React from 'react';
import {ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default class TodoElement extends React.Component<TodoElementProps> {
    public render(){
        const {checkItem, removeItem, item} = this.props;
        const labelId = `checkbox-list-label-${item.id}`;

        return (
        <ListItem role={undefined} dense button onClick={() => checkItem(item.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
            <ListItemSecondaryAction onClick={()=> removeItem(item.id)}>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        );
    }
}