import React from "react";
import styled, { keyframes } from "styled-components";

const MouseContainer = styled.div`
  height: 50px;
  width: 30px;
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;
const ScrollAnimation = keyframes`
0%{
    opacity: 0;
    margin-top: 5px;
}
30%{
    opacity: 1;
    margin-top: 5px;
}
100%{
    opacity: 0;
    margin-top: 20px;
}
`;
const MouseScroll = styled.div`
  height: 5px;
  width: 0.1px;
  border: 1px solid black;
  margin-top: 5px;
  border-radius: 10px;
  animation: ${ScrollAnimation} 1.5s infinite;
  transition: 1.5s ease-in
`;

const Mouse = () => {
  return (
    <MouseContainer>
      <MouseScroll />
    </MouseContainer>
  );
};

export default Mouse;
