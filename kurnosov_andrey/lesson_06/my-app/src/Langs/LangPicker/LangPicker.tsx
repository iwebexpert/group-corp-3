import React from "react";
import { Langs } from "../Langs/Langs";
import { LangContext } from "../LangContext/LangContext";

type Props = {
}

type LangsList = {
    [key in Langs]: string
}
const list: LangsList = {
    [Langs.RU]: 'Русский',
    [Langs.EN]: 'Английский',
};


export const LangPicker = (p:Props) => {


    const options = (Object.keys(list) as Langs[])
        .map(lang => ({ lang, name: list[lang] }))
        .map(l => {
            return <option key={l.lang} value={l.lang}>{l.name}</option>
        });

    return <LangContext.Consumer>
        {langContext =>
            <select value={langContext.lang} 
                    onChange={(e) => {
                        langContext.change(e.target.value as Langs)
                    }}>
                {options}
            </select>
        }
    </LangContext.Consumer>
}

