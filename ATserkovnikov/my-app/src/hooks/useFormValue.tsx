import React, {useCallback, useState} from "react";

export const useFormValue = (val: string) => {
  const [value, setValues] = useState(val);

  if (value !== val && val !== "")
     setValues(val);

  const onChange = useCallback((event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
       setValues(event.target.value), []);

  return {value, onChange, setValues};
};
