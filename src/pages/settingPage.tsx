import React, { useState } from "react";
import styled from "styled-components";
import { TextInput, LongButton } from "../components/index";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

// const StyledDiv = styled.div`
// 	margin-top: 20px;
// `;

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
  const [apiKey, setApiKey] = useState("");
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleApiChange = (value: string) => {
    setApiKey(value);
  };
  console.log(apiKey);

  const handleSubmit = (): void => {
    chrome.storage.sync.set({ apiKey, language }, () => {
      console.log("The apiKey and language are saved.");
    });
  };

  const goBack = (): void => {
    // Logic to go back, for example:
    window.history.back();
  };

  return (
    <SettingDiv>
      <BackButton onClick={goBack}>
        <ArrowBackIcon />
      </BackButton>
      <StyledForm>
        <TextInput label="Language" onChange={handleLanguageChange} />
        <TextInput label="API key" onChange={handleApiChange} />
      </StyledForm>
      <LongButton buttonText="Confirm" onClick={handleSubmit} />
    </SettingDiv>
  );
};

export default SettingPage;
