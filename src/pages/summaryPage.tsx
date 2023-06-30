import { LongButton } from "../components/LongButton";
import { Summary } from "../components/Summary";
import { Heading } from "../components/Heading";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const SummaryDiv = styled.div`
	width: 323px;
	height: 500px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const SummaryPaper = styled.div`
	height: 400px;
	overflow: "auto";
`;

const SummarizeDiv = styled.div`
	width: 302px;
	height: 255px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const SummaryPage: React.FC = () => {
	const summaryRef = useRef<HTMLDivElement | null>(null);
	const [currentURL, setCurrentURL] = useState(window.location.href);
	const [summaryText, setSummaryText] = useState("");
	const [result, setResult] = useState(false);

	// 可以显示返回的content,但是copy功能的逻辑可能不对,另外需要修改style
	const copySummary = () => {
		const summaryText = summaryRef.current?.innerText;
		if (summaryText) {
			navigator.clipboard.writeText(summaryText);
		}
	};

	const fetchData = async () => {
		try {
			const apiKey = chrome.storage.sync.get("apiKey");
			const language = chrome.storage.sync.get("language");

			const url = new URL(currentURL);
			const videoId = url.searchParams.get("v");

			const response = await axios
				.create({
					baseURL:
						"https://youtubesummarizer-node-backend-b3ijrlrwga-as.a.run.app",
				})
				.post("/data", {
					apiKey: apiKey,
					video_id: videoId,
					language: language,
				});

			// const response = await axios.create({baseURL: 'https://youtubesummarizer-node-backend-b3ijrlrwga-as.a.run.app'}).post('/data', {
			//   "apiKey":"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",
			//   "video_id": "J0uLst8JGr8",
			//   "language": "Chinese"});

			if (response.data && response.data.content) {
				setSummaryText(response.data.content);

				setResult(true);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const handlePopState = () => {
			setCurrentURL(window.location.href);
		};
		window.addEventListener("popstate", handlePopState);

		fetchData();

		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, [currentURL]);

	if (result) {
		return (
			<SummaryDiv>
				<Heading showSettings={true}/>
				<SummaryPaper ref={summaryRef}>
					<Summary summaryText={summaryText} />
				</SummaryPaper>
				<LongButton buttonText="Copy Summarization" onClick={copySummary} />
			</SummaryDiv>
		);
	} else {
		return (
			<SummarizeDiv>
				<Heading showSettings={true}/>
				<LongButton buttonText="Generate Summary" onClick={fetchData} />
			</SummarizeDiv>
		);
	}
};

export default SummaryPage;
