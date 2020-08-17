import './IconCheckbox.css'
import React from "react";
import { IdSequence } from '../IdSequence';


type Props = {
    checked: boolean
    onChange: (x: boolean) => void
    id: string,
    checkedIcon: JSX.Element
    uncheckedIcon: JSX.Element
}

type State = {
    checked: boolean
}

export class IconCheckbox extends React.Component<Props, State> {
    private static readonly ids = new IdSequence(); 
    private id: string;
    constructor(props: Props) {
        super(props);
        this.id = 'icon-chekbox-' + IconCheckbox.ids.next()
        
        this.state = { checked: props.checked };
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        this.setState( {checked } );
        this.props.onChange(checked);
    }

    public render() {
        const id = this.props.id || this.id;
        return <>
            <label htmlFor={id} className="icon-checkbox">
                <input id={id} className="hidden-checkbox" type="checkbox" onChange={this.onChange}/>
                {this.state.checked ? this.props.checkedIcon : this.props.uncheckedIcon}
            </label>
        </>
    }
}