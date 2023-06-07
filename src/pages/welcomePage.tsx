import { TextInput } from "../components/index";
import styled from 'styled-components';
import React, { useState } from 'react';

const StyledForm = styled.div`
  display:flex;
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
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const WelcomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  console.log(inputValue);

  return (
    <WelcomeDiv>
      <h3>Some settings before we start</h3>
      <StyledForm>
        <TextInput
            label="Language"
            onChange={handleInputChange}
          />
        <StyledDiv>
          <TextInput
            label="API key"
            onChange={handleInputChange}
          />
          <p>Don’t have an API key? <a href="https://platform.openai.com/account/api-keys" style={{ color: '#FF5C62', textDecoration: 'none' }}>Get one here</a> </p>
        </StyledDiv>
        </StyledForm>
      </WelcomeDiv>
  );
};

export default WelcomePage;
