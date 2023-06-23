import styled from "styled-components";

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

const Heading = () => {
  return (
    <HeadingWrap>
      <h1>YouTube Summarizer</h1>
      <Line />
    </HeadingWrap>
  );
};

export { Heading };
