import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LongButton } from "./LongButton";
import { Summary } from "./Summary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

const summaryText = "This is a summary of the video.";

interface OnPageCardProps {
	isDarkTheme: boolean;
}

const StyledDiv = styled.div`
	margin-top: 20px;
`;

const StyledSummary = styled.div`
	margin-top: 20px;
`;

const OnPageCard: React.FC<OnPageCardProps> = ({ isDarkTheme }) => {
	// Create a theme instance.
	const theme = createTheme({
		palette: {
			mode: isDarkTheme ? "dark" : "light", // switch themes based on prop
		},
	});

	return (
		<StyledDiv>
			<ThemeProvider theme={theme}>
				<Card sx={{ minWidth: 275, borderRadius: 4 }}>
					<CardContent>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Typography variant="h5" component="div">
								YouTube Summarizer
							</Typography>
							<LongButton buttonText="Summarize" width={"100px"} />
						</Box>
						<Typography variant="body2">
							<StyledSummary>
								<Summary summaryText={summaryText} />
							</StyledSummary>
						</Typography>
					</CardContent>
				</Card>
			</ThemeProvider>
		</StyledDiv>
	);
};

export { OnPageCard };
