import React from "react";
import { Langs, LangString } from "../LangString/LangString";


export interface ILangContext {
    lang: Langs,
    translate: (str: LangString) => string
}
export interface ILangContextMod extends ILangContext {
    change: (lang: Langs) => void;
}

export function createLangContextValue(root: React.Component<any, any, any>): ILangContextMod {
    return {
        lang: Langs.RU,
        change(lang: Langs) {
            this.lang = lang;
            if (root != null)
                // render
                root.setState({});
        },
        translate(str: LangString) {
            return str[this.lang]
        }
    }
}

export const LangContext: React.Context<ILangContextMod> =
    React.createContext<ILangContextMod>(createLangContextValue(null as any))

