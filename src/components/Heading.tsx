import styled from "styled-components";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from "@mui/material";

const Line = styled.div`
  border-top: 0.1px solid #adacac;
  width: 80%;
  height: 0;
`;

const HeadingWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingButton = styled(IconButton)`
	position: absolute;
  display: inline;
	top: 10px;
	left: 10px;
`;

const H1Title = styled.h1`
  display: inline;
`;

interface HeadingProps {
  showSettings?: boolean;
}

const Heading = ({ showSettings = false }: HeadingProps) => {
  return (
    <HeadingWrap>
      <H1Title>YouTube Summarizer</H1Title>
      {showSettings && 
        <SettingButton> 
          <SettingsOutlinedIcon/>
        </SettingButton>
      }
      <Line/>
    </HeadingWrap>
  );
};

export { Heading };
