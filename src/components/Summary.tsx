
import { Paper, Typography } from "@mui/material";
import { theme } from '../styles/Theme';
import { ThemeProvider } from '@mui/material/styles';


const Summary = (prop: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper color="background">
        <Typography align="justify">
          ${prop.data.content}
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export { Summary };