import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            width: '100%',
        },
        paper: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

type MessageFormProps = {
    onSendHandler: (data: MessageFormState) => void;
};

type MessageFormState = {
    text: string;
    author: string;
};

export const MessageForm: React.FC<MessageFormProps> = ({onSendHandler}) => {
    const classes = useStyles();
    const [dataForm, setDataForm] = useState<MessageFormState>({author: '', text: ''});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newState = {...dataForm, [event.target.name]: event.target.value};
        setDataForm(newState);
    };

    const handleMessageSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onSendHandler(dataForm);
        setDataForm({...dataForm, text: ''});
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <Input placeholder="Введите имя" inputProps={{'aria-label': 'description'}}
                       name="author" type="text" value={dataForm.author} onChange={handleInputChange}/>
            </div>
            <div>
                <TextField label="Введите текст"
                           multiline
                           name="text" value={dataForm.text} onChange={handleInputChange}/>
            </div>
            <div>
                <Button onClick={handleMessageSend} disabled={!dataForm.text.length} variant="contained"
                        color="primary">
                    Отправить сообщение
                </Button>
            </div>
        </form>
    );
}