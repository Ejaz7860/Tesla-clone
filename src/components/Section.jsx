import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = ({
  title,
  description,
  leftBtnText,
  RightBtnText,
  backgroundImg,
}) => {
  return (
    <>
      <Wrap bgImage={backgroundImg}>

        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
          </Fade>

    
          <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {/* If there is right button exist then */}
              {
                RightBtnText && <RightButton>{RightBtnText}</RightButton>
              }

            </ButtonGroup>
            </Fade>
            <DownArrow src="/img/down-arrow.svg" />
          </Buttons>
  
      </Wrap>
    </>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => `url("/img/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  margin-top: 15vh;

  h1 {
    font-size: 2.6rem;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 699px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  width: 256px;
  height: 40px;
  padding: 10px 0;
  border: 0;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  @media (max-width: 650px) {
    margin-bottom: 10px;
  }
`;

const RightButton = styled(LeftButton)`
  background: #fff;
  color: #393c41;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`;
