import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LongButton } from "./LongButton";
import { Summary } from "./Summary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { fetchData } from "../utils/fetchData";
import Skeleton from "@mui/material/Skeleton";

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
	const [currentUrl, setCurrentUrl] = useState("");
	const [summaryText, setSummaryText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Update currentUrl whenever the URL changes
	useEffect(() => {
		const updateUrl = () => {
			setCurrentUrl(window.location.href);
		};

		// Listen for changes in the URL
		window.addEventListener("popstate", updateUrl);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("popstate", updateUrl);
		};
	}, []);

	const handleFetchData = async () => {
		setIsLoading(true);
		const data = await fetchData(currentUrl);
		setSummaryText(data.content);
		setIsLoading(false);
	};

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
							<LongButton
								buttonText="Summarize"
								width={"100px"}
								onClick={handleFetchData}
							/>
						</Box>
						<Typography variant="body2">
							<StyledSummary>
								{isLoading ? (
									<Skeleton animation="wave" />
								) : (
									<Summary summaryText={summaryText} />
								)}
							</StyledSummary>
						</Typography>
					</CardContent>
				</Card>
			</ThemeProvider>
		</StyledDiv>
	);
};

export { OnPageCard };
