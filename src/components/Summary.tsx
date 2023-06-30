import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SummaryProps {
	summaryText: string;
}

const Summary: React.FC<SummaryProps> = ({ summaryText }) => {
	const theme = useTheme();

	return (
		<Paper sx={{ backgroundColor: theme.palette.background.default }}>
			<Typography align="justify">{summaryText}</Typography>
		</Paper>
	);
};

export { Summary };
