import {LongButton} from '../components/LongButton';
import {Summary} from '../components/Summary';
import {useRef, useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';



const SummaryDiv = styled.div`
  width: 323px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SummaryPage: React.FC = () => {
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [summaryText, setSummaryText] = useState('');
  const [result, setResult] = useState(false);

  // 可以显示返回的content,但是copy功能的逻辑可能不对,另外需要修改style
  const copySummary = () => {
    const summaryText = summaryRef.current?.innerText;
    if(summaryText) {
      navigator.clipboard.writeText(summaryText);
    }
  };

  const fetchData = async () => {
    try {
      // const apiKey = chrome.storage.sync.get('apiKey');
      // const language = chrome.storage.sync.get('language');

      // const url = new URL(currentURL);
      // const v = url.searchParams.get("v");

      const response = await axios.create({baseURL: 'https://youtubesummarizer-node-backend-b3ijrlrwga-as.a.run.app'}).post('/data', {
        "apiKey":"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", 
        "video_id": "Lqb_4zcI708", 
        "language": "Chinese"});
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
    window.addEventListener('popstate', handlePopState);

    fetchData();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  },[currentURL]);

  if(result) {
    return (
      <SummaryDiv>
        <Summary summaryText={summaryText}/>
        <LongButton buttonText='Copy Summarization' onClick={copySummary} />
      </SummaryDiv>
    );
  } else {
    return (
      <LongButton buttonText='Generate Summary' onClick={fetchData} />
    );
  }
};

export default SummaryPage;