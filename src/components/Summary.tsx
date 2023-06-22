
import { Paper, Typography } from "@mui/material";
import { theme } from '../styles/Theme';
import { ThemeProvider } from '@mui/material/styles';

interface SummaryProps {
  summaryText: string;
}


const Summary: React.FC<SummaryProps> = ({summaryText}) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper color="background">
        <Typography align="justify">
          {summaryText}
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export { Summary };