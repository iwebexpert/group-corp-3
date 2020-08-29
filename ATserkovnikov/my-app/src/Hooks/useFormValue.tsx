import React, {useCallback, useState} from "react";

export const useFormValue = (val: string) => {
  const [value, setValue] = useState(val);

  if (value !== val)
    setValue(val);

  const onChange = useCallback((event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
      setValue(event.target.value), []);

  return {value, setValue, onChange};
};
