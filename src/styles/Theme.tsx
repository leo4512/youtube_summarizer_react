import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF605A",
    },
    background: {
      paper: "#000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        square: true,
      },
    },
  },
});

export { theme };
