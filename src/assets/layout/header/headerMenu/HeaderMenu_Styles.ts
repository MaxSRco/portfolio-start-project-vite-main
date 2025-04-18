import {theme} from "../../../../styles/Theme";
import styled, {css} from "styled-components";

// Menu

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const MenuItem = styled.li`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
  }

  &:hover {
    ${Mask} {
      transform: skewX(20deg);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(-20deg) ;
      }
    }
  }
`

// Mobile Menu

const MobileMenu = styled.nav`
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  //top: -114px;
  //right: -100px;
  //width: 200px;
  //height: 200px;
  width: 36px;
  height: 18px;
  top: 0;
  right: 0;
  z-index: 999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    //left: 40px;
    //bottom: 50px;
    top: 32px;
    right: 16px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100000;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
  }
`

// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    //width: 100%;
  }
`

export const S = {
    Link,
    Mask,
    MenuItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,
}