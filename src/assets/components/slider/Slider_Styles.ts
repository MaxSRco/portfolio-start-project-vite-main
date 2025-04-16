import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
  width: 100%;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 15px;
`

const Name = styled.span`
  display: inline-block;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 10px 0 30px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    border-radius: 20px;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    
    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}