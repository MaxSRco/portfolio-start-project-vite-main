import {theme} from "../../styles/Theme";
import styled from "styled-components";

export const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  position: relative;
  z-index: 0;
  
  padding: 10px;
  
  &:hover {
    &::before {
      height: 10px;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;

    z-index: -1;
  }
`