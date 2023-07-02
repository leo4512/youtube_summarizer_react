import { Typography } from "@mui/material";

interface SummaryProps {
	summaryText: string;
}

const Summary: React.FC<SummaryProps> = ({ summaryText }) => {
	return (
		<Typography
			component="div"
			style={{
				whiteSpace: "pre-line",
				fontFamily: "Roboto",
				fontSize: "14px",
				padding: "10px",
			}}
			align="justify"
		>
			{summaryText}
		</Typography>
	);
};

export { Summary };
