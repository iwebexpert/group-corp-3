import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Paper } from '@material-ui/core';

const MessageForm: React.FC<MessageFormProps> = (props) => {
    const textRef = React.createRef<HTMLInputElement>();
    const [text, setText] = useState<string>('');
    const [author, setAuthor] = useState<string>('Default');


    const addItem = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.length && author.length){
            props.sendMessage({text: text, author: author});
            setText('');
            textRef.current?.focus();
        }
    };

    return(
            <Box p={1}>
                <form onSubmit={addItem}>
                    <Grid container spacing={1}>
                        <Grid item sm={12}>
                            <TextField fullWidth size='small' value={text} onChange={(e)=>setText(e.target.value)} autoComplete='off' inputRef={textRef} id="outlined-basic" label="Text" variant="outlined" />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField fullWidth size='small' value={author} onChange={(e)=>setAuthor(e.target.value)} id="outlined-basic" label="Author" variant="outlined" />
                        </Grid>
                        <Grid item sm={12}>
                            <Button disabled={!(text.length && author.length)} type='submit' fullWidth variant="contained" size="large" color="secondary">
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
        </Box>
    );
}

export default MessageForm;