import React from 'react';
import styled from 'styled-components';


const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Word = styled.span`
  font-size: 32px;
  position: relative;
  margin : 20px;
  transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #868584;
  
 

 
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    transform: translateX(-50%);
    width: 4px;
    height: 0%;
    background-color: #ffbd59;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: #ffbd59;
    transform: translateY(-10px);

    &:before {
      height: 100%;
    }
  }
`;

const ExperinceTab = ({ word, active }) => {


  return (
    <WordContainer>
      <Word className={active === word ? 'active' : ''} >{word}</Word>
    </WordContainer>
  );
}

export default ExperinceTab;
