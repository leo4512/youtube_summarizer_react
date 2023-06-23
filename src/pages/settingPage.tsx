import React, { useRef, useState } from "react";
import styled from "styled-components";
import { TextInput, LongButton, SelectButton } from "../components/index";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AlterBox from "../components/Alter";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
`;

const SettingDiv = styled.div`
  width: 302px;
  height: 255px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const SettingPage = () => {
  const apiKeyRef = useRef<HTMLInputElement>(null);
  const [apiKey, setApiKey] = useState("");
  const [language, setLanguage] = useState("");
  const [showAlter, setShowAlter] = useState(false);

  chrome.storage.sync.get(["apiKey", "language"], (result) => {
    const apiKey = result.apiKey;
    const language = result.language;
    setLanguage(language);
    console.log("Retrieved apiKey:", apiKey);
    console.log("Retrieved language:", language);
    // Use the retrieved data as needed
  });

  const handleSelectChange = (value: string) => {
    setLanguage(value);
    console.log(`Selected value is: ${value}`);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const apiKey = apiKeyRef.current?.value;
    if (apiKey) {
      console.log("API key: ", apiKey);
      console.log("Language: ", language);
      chrome.storage.sync.set({ apiKey: apiKey, language: language });
    } else {
      setShowAlter(true);
    }
  };

  const goBack = (): void => {
    window.history.back();
  };

  return (
    <SettingDiv>
      <BackButton onClick={goBack}>
        <ArrowBackIcon />
      </BackButton>
      <StyledForm>
        <SelectButton onSelectChange={handleSelectChange} />
        <StyledDiv>
          <TextInput label="API key" ref={apiKeyRef} />
        </StyledDiv>
        {showAlter && <AlterBox message="Please provide a valid api key" />}
        <LongButton buttonText="Confirm" onClick={handleSubmit} />
      </StyledForm>
    </SettingDiv>
  );
};

export default SettingPage;
