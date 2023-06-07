import Button from '@mui/material/Button';
import { theme } from '../styles/Theme';
import { ThemeProvider } from '@mui/material/styles';

const LongButton = (prop: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color='primary' fullWidth>${prop.buttonText}</Button>
    </ThemeProvider>
  );
};

export { LongButton };