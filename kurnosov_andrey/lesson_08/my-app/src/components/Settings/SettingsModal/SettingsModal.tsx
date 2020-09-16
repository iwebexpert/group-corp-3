import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import { LangContext, LangText, Langs, LangString, langsNameList } from '../../../Langs';
import { AuthContext } from '../../../Auth';
import { ThemeContext, Themes } from '../../../Theme';


const headerString: LangString = { RU: 'Настройки', EN: 'Settings' };
const langSettingsString: LangString = { RU: 'Язык', EN: 'Language' };
const userNameSettingsString: LangString = { RU: 'Имя пользователя', EN: 'User name' };
const themeSettingsString: LangString = { RU: 'Тема', EN: 'Theme' };
const closeString: LangString = { RU: 'Закрыть', EN: 'Close' };
const saveString: LangString = { RU: 'Сохранить', EN: 'Save' };

const themesNameMap: { [theme in Themes]: LangString } = {
    [Themes.dark]: { RU: 'Тёмная', EN: 'Dark' },
    [Themes.light]: { RU: 'Светлая', EN: 'Light' }
};
const themeNames: { theme: Themes, name: LangString }[] = Object.keys(themesNameMap).map(k => k as Themes).map(k => ({
    theme: k,
    name: themesNameMap[k]
}))

type Props = {
    show: boolean,
    onHide: () => void
}
export const SettingsModal = (props: Props) => {
    const langCtx = useContext(LangContext);
    const authCtx = useContext(AuthContext);
    const themeCtx = useContext(ThemeContext);

    const _lang = langCtx.lang;
    const _theme = themeCtx.theme;
    const [userName, setUserName] = useState(authCtx.user.name);

    const setLang = (lang: Langs) => langCtx.change(lang);
    const setTheme = (theme: Themes) => themeCtx.change(theme);

    const handleSave: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('invalid')
        }
        if (form.checkValidity() || !userName /* Для проверки пустого имени*/){
            authCtx.change({
                ...authCtx.user,
                name: userName
            });
            props.onHide();
        }
    }

    const handleClose = () => {
        setLang(_lang);
        setTheme(_theme);
        props.onHide();
    }


    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton onHide={() => handleClose()}>
                <Modal.Title><LangText text={headerString} /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated id="settings-form"
                    onSubmit={handleSave}
                >
                    <Form.Group>
                        <Form.Label><LangText text={userNameSettingsString} /></Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            maxLength={30}
                            pattern={"[a-zA-Zа-яА-ЯёЁ]{3,30}|.{0}"}
                            required
                        />
                        <Form.Control.Feedback
                            type="invalid"
                            aria-describedby={"chat-username-input"}
                        >
                            <LangText text={{
                                RU: 'Имя пользователя должно содержать от 3 до 30 букв',
                                EN: 'The user name must contain between 3 and 30 letters',
                            }} />
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/*TODO: Нижнюю половину можно не валидировать - там не ошибиться */}
                    <Form.Group>
                        <Form.Label><LangText text={langSettingsString} /></Form.Label>
                        <Form.Control as="select"
                            value={langCtx.lang}
                            onChange={e => setLang(e.target.value as Langs)}
                        >
                            {
                                langsNameList.map(el => (
                                    <option key={el.lang} value={el.lang}> {el.name} </option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><LangText text={themeSettingsString} /></Form.Label>
                        {
                            themeNames.map(tn =>
                                <Form.Check
                                    type="radio"
                                    name="theme-radio"
                                    id={`theme-radio-${tn.theme}`}
                                    key={tn.theme}
                                    value={tn.theme}
                                    checked={themeCtx.theme === tn.theme}
                                    onClick={() => setTheme(tn.theme)}
                                    label={langCtx.translate(tn.name)}
                                    onChange={(e: any) => { }}
                                />)
                        }
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <LangText text={closeString} />
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    form="settings-form"
                >
                    <LangText text={saveString} />
                </Button>
            </Modal.Footer>
        </Modal>);
}