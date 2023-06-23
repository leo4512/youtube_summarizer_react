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
      styleOverrides: {
        root: {
          color: "white",
        },
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
