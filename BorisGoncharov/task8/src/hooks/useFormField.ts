import React, { useCallback, useState } from 'react';

export const useFormField = (initValue: any) => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(event.target.value),
    []);
  return { value, onChange };
}