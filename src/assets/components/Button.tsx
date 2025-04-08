import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  z-index: 0;
  
  position: relative;
  
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
  }
  // &:hover {
  //   animation:text-focus-in .3s cubic-bezier(.55,.055,.675,.19) both;
  //   color: ${theme.colors.accent};
  //   @keyframes text-focus-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}
  // }

  
`