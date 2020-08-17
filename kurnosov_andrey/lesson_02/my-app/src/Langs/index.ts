import { ILangContext as ilc, createLangContextValue, LangContext, ILangContextMod as ilcm } from "./LangContext/LangContext";
import { LangPicker } from "./LangPicker/LangPicker";
import { LangString as ls, Langs } from "./LangString/LangString";
import { LangText } from "./LangText/LangText";

export {
    LangContext,
    LangText,
    LangPicker,
    Langs,
    createLangContextValue
};

// Это можно сделать как-то приличнее?
export type ILangContext = ilc;
export type ILangContextMod = ilcm;
export type LangString = ls;
