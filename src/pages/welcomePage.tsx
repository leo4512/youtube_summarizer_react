import { TextInput } from "../components/index";
import styled from "styled-components";
import React, { useState } from "react";
import SelectButton from "../components/select";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
`;

const WelcomeDiv = styled.div`
  width: 302px;
  height: 255px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  /* Add your styling here */
`;

const WelcomePage = () => {
  const [language, setLanguage] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSelectChange = (value: string) => {
    setLanguage(value);
    console.log(`Selected value is: ${value}`);
  };

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Language: ", language);
    console.log("API key: ", apiKey);
    chrome.storage.sync.set({ apiKey: apiKey, language: language });
  };

  // chrome.storage.sync.set({ apiKey: apiKey, language: language }, () => {
  //   console.log("Values are set to " + apiKey + " and " + language);
  // });

  // Get values
  chrome.storage.sync.get(["apiKey", "language"], (result) => {
    console.log(
      "Value currently is " + result.apiKey + " and " + result.language
    );
  });

  return (
    <WelcomeDiv>
      <h3>Some settings before we start</h3>
      <StyledForm>
        <SelectButton onSelectChange={handleSelectChange} />
        <StyledDiv>
          <TextInput label="API key" onChange={handleApiKeyChange} />
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
      </StyledForm>
      <Button onClick={handleSubmit}>Submit</Button>
    </WelcomeDiv>
  );
};

export default WelcomePage;
