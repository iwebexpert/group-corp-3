import { HTMLAttributes, useEffect, useRef } from "react";
import React from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {

}

export const Textarea = (props: HTMLAttributes<HTMLTextAreaElement>) => {

    let ref = useRef<HTMLTextAreaElement|null>();
    useEffect(() => {
        if(ref.current) {
            ref.current.style.height = 'auto';
            ref.current.style.height = ref.current.scrollHeight + 5 + 'px';
        }
    })

    return <textarea {...props} ref={r => ref.current = r}/>
}