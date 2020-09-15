import React from "react";
import { LangString } from "../LangString/LangString";
import { LangContext } from "../LangContext/LangContext";

type Props = {
    text: LangString
}
type State = Props;

export const LangText = ({text}:Props) => {

    return <LangContext.Consumer children = {
        context => context.translate(text)
    } />
} 