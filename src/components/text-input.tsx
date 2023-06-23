import React from "react";
import TextField from "@mui/material/TextField";

interface TextInputProps {
  label: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <TextField
        {...props}
        variant="outlined"
        inputRef={ref}
        sx={{ width: "244px" }}
        required
      />
    );
  }
);

export { TextInput };
