import styled from "styled-components";
import React, { useRef, useState } from "react";
import { TextInput, LongButton, SelectButton } from "../components/index";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import AlterBox from "../components/Alter";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding-bottom: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
`;

const WelcomeDiv = styled.div`
  width: 302px;
  // height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomePage = () => {
  const navigate = useNavigate();

  const apiKeyRef = useRef<HTMLInputElement | null>(null);
  const [language, setLanguage] = useState("");
  const [showAlter, setShowAlter] = useState(false);

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
      navigate("/setting");
    } else {
      setShowAlter(true);
    }
  };

  // Get values
  chrome.storage.sync.get(["apiKey", "language"], (result) => {
    console.log(
      "Value currently is " + result.apiKey + " and " + result.language
    );
  });

  return (
    <WelcomeDiv>
      <Heading />
      <h4>Some settings before we start</h4>
      <StyledForm>
        <SelectButton
          onSelectChange={handleSelectChange}
          defaultLanguage="english"
        />
        <StyledDiv>
          <TextInput label="API key" ref={apiKeyRef} />
          <p>
            Don’t have an API key?{" "}
            <a
              href="https://platform.openai.com/account/api-keys"
              style={{ color: "#FF5C62", textDecoration: "none" }}
            >
              Get one here
            </a>{" "}
          </p>
        </StyledDiv>
        {showAlter && <AlterBox message="Please provide a valid api key" />}
        <LongButton buttonText="Let’s get started" onClick={handleSubmit} />
      </StyledForm>
    </WelcomeDiv>
  );
};

export default WelcomePage;
