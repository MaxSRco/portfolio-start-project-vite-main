import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";
import styled from "styled-components";

const Main = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    max-width: 360px;
    width: 100%;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      max-width: 314px;
      width: 100%;
      height: 414px;
      top: -20px;
      left: 17px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }

`

const Photo = styled.img`
  max-width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    max-width: 310px;
    height: 380px;
  }
`

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
  color: #fff;
  text-align: left;

  p {
    display: none;
  }
`

const Name = styled.h2`
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})}
  letter-spacing: 0.05em;
  margin: 10px 10px 10px 0;
  text-align: left;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      position: absolute;
      bottom: -6px;
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;

      @media ${theme.media.tablet} {
        bottom: -8px;
      }

      @media ${theme.media.mobile} {
        bottom: -10px;
      }
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    SmallText,
    MainTitle,
    Name,
}