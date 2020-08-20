import React from 'react';
import { TextField, Box, Button, InputBase, Paper, IconButton, Divider, Grid } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons'

export default class TodoForm extends React.Component<TodoFormProps> {
    private inputRef = React.createRef<HTMLInputElement>();

    private addItem = () => {
        if(this.inputRef.current){
            const itemText: string = this.inputRef.current.value;
            this.props.addItem(itemText);
            this.inputRef.current.value = '';
        }
    };
    public render(){
        return (
            <Box px={2} mb={2}>
                 <Grid container spacing={1}>
                    <Grid item sm={12}>
                        <TextField fullWidth size='small' inputRef={this.inputRef} id="outlined-basic" label="New Item" variant="outlined" />
                    </Grid>
                    <Grid item sm={12}>
                        <Button fullWidth variant="contained" size="large" color="secondary" onClick={this.addItem}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}