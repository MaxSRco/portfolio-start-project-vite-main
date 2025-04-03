import styled from "styled-components";
import photo from '../../../images/my-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <FlexWrapper direction={"column"} justify={"center"} align={"flex-start"} gap={"10px"}>
                        <SmallText>Hi there</SmallText>
                        <Name>I'm <span>Sergey Maksimov</span></Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </FlexWrapper>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    position: absolute;
    border: 5px solid ${theme.colors.accent};
    width: 360px;
    height: 470px;
    top: -24px;
    left: 34px;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`

const MainTitle = styled.h1`
  font-size: 27px;
  color: #fff;
`

const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      position: absolute;
      bottom: 0;
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }
`