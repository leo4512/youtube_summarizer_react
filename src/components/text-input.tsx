import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

interface TextInputProps {
  label: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label,onChange}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    
    <TextField
      label={label}
      onChange={ handleChange}
      variant="outlined"
      sx={{ width: '244px'}} 
    />
  );
};

export { TextInput };