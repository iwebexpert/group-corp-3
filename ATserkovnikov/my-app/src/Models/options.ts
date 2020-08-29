import {ChatThemeEnum, LangEnum} from "./Enums";

export type Options = {
    author: string;
    chatTheme: ChatThemeEnum;
    lang: LangEnum;
    confirmCondition: boolean;
}

export type OptionsContext = {
    options: Options,
    changeContextHandle: any
}
