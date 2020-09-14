import './Textarea.scss'
import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { FormControlProps } from "react-bootstrap/esm/FormControl";

interface Props extends FormControlProps {
    
}

export const Textarea = (props: Props ) => {

    let ref = useRef<HTMLTextAreaElement|null>();
    useEffect(() => {
        if(ref.current) {
            ref.current.style.height = 'auto';
            ref.current.style.height = ref.current.scrollHeight + 5 + 'px';
        }
    })

    return <Form.Control as="textarea" {...props} ref={(r: HTMLTextAreaElement) => ref.current = r} className="resize-none"/>
}