import { LongButton } from "../components/LongButton";
import { Summary } from "../components/Summary";
import { Heading } from "../components/Heading";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../utils/fetchData";

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

	const handleFetchData = async () => {
		const content = await fetchData(currentURL);
		if (content) {
				setSummaryText(content);
				setResult(true);
		}
};

	useEffect(() => {
		const handlePopState = () => {
			setCurrentURL(window.location.href);
		};
		window.addEventListener("popstate", handlePopState);

		handleFetchData();

		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, [currentURL]);

	if (result) {
		return (
			<SummaryDiv>
				<Heading />
				<SummaryPaper ref={summaryRef}>
					<Summary summaryText={summaryText} />
				</SummaryPaper>
				<LongButton buttonText="Copy Summarization" onClick={copySummary} />
			</SummaryDiv>
		);
	} else {
		return (
			<SummarizeDiv>
				<Heading />
				<LongButton buttonText="Generate Summary" onClick={handleFetchData} />
			</SummarizeDiv>
		);
	}
};

export default SummaryPage;
