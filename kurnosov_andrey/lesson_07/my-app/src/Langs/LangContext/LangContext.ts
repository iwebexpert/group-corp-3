import React from "react";
import { LangString } from "../LangString/LangString";
import { Langs } from "../Langs/Langs";


export interface ILangContextInit {
    lang: Langs,
    change: (lang: Langs) => void;
}
export interface ILangContext {
    lang: Langs,
    translate: (str: LangString) => string
}
export interface ILangContextMod extends ILangContext, ILangContextInit {
    change: (lang: Langs) => void;
}

export function mixinLangContextValue(initObject: ILangContextInit): ILangContextMod {
    return {
        ...initObject,
        translate(str: LangString) {
            return str[this.lang]
        }
    };
}
export const LangContext: React.Context<ILangContextMod> =
    React.createContext<ILangContextMod>(mixinLangContextValue({lang: Langs.RU, change: () => {}}))

