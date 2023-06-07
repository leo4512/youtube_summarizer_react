import React from 'react';
import TextField from '@mui/material/TextField';

interface TextInputProps {
  label: string;
  value: string;
  // onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value }) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   onChange(event.target.value);
  // };

  return (
    <TextField
      label={label}
      value={value}
      variant="outlined"
    />
  );
};

export default TextInput;