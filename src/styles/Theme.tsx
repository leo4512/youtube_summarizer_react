import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
		primary: {
			main: '#FF605A',
		}
	},
	components: {
    MuiButton: {
      defaultProps: {
        fullWidth: true
      },
    },
  },
});

export { theme };