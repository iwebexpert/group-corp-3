import React from "react";
import { LangString } from "../LangString/LangString";
import { LangContext } from "../LangContext/LangContext";

type Props = {
    text: LangString
}
type State = Props;

export class LangText extends React.Component<Props, State> {
    static contextType = LangContext;

    constructor(props: Props) {
        super(props);

        this.state = { text: this.props.text };
    }


    public render() {
        return this.context.translate(this.state.text);
    }
} 