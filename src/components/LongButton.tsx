import Button from "@mui/material/Button";
import { theme } from "../styles/Theme";
import { ThemeProvider } from "@mui/material/styles";

interface LongButtonProps {
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LongButton: React.FC<LongButtonProps> = ({ buttonText, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={onClick}>
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export { LongButton };
