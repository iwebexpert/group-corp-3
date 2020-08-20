import React from "react";
import { Langs } from "../LangString/LangString";
import { LangContext } from "../LangContext/LangContext";

type Props = {
}
type State = {
    langsList: LangsList
}

type LangsList = {
    [key in Langs]: string
}

export class LangPicker extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        const list = {
            [Langs.RU]: 'Русский',
            [Langs.EN]: 'Английский',
        };

        this.state = {
            langsList: list
        };
    }

    public render() {
        const options = (Object.keys(this.state.langsList) as Langs[])
            .map(lang => ({ lang, name: this.state.langsList[lang] }))
            .map(l => {
                return <option key={l.lang} value={l.lang}>{l.name}</option>
            });

        return <LangContext.Consumer>
            {langContext =>
                <select value={langContext.lang} 
                        onChange={(e) => {
                            langContext.change(e.target.value as Langs)
                            this.setState({});    
                        }}>
                    {options}
                </select>
            }
        </LangContext.Consumer>
    }
}

