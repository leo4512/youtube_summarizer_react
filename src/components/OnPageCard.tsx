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
	margin-top: 15px;
`;

const StyledSummary = styled.div`
	margin-top: 20px;
	
`;

const OnPageCard: React.FC<OnPageCardProps> = ({ isDarkTheme }) => {
	const [summaryText, setSummaryText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [checkSetting, setCheckSetting] = useState(false);

	const checkSettings = () => {
		chrome.storage.sync.get(["apiKey", "language"], (items) => {
			if (items.apiKey && items.language) {
				setCheckSetting(true);
			} else {
				console.log("Missing api and language.")
			}
		});
	};

	useEffect(() => {
		checkSettings();
	}, [])

	const handleFetchData = async () => {
		setIsLoading(true);
		try {
			const data = await fetchData(window.location.href);
			setSummaryText(data);
		} catch (error) {
			console.error(error);
			setSummaryText("Error in summarizing. Please try again. ");
		} finally {
			setIsLoading(false);
		}
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
				<Card sx={{ minWidth: 275, borderRadius: 3 }}>
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
							{checkSetting ? (
								<StyledSummary>
									{isLoading ? (
										<div>
											<Skeleton animation="wave" />
											<Skeleton animation="wave" />
											<Skeleton animation="wave" />
										</div>
									) : (
										<Summary summaryText={summaryText} />
									)}
								</StyledSummary>
							) : (
								<Summary summaryText={"Please set API key and language in the extension popup, then refresh the page."} />
							)}
						</Typography>
					</CardContent>
				</Card>
			</ThemeProvider>
		</StyledDiv>
	);
};

export { OnPageCard };
