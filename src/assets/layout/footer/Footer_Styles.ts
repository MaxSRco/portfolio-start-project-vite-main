import {theme} from "../../../styles/Theme";
import {Container} from "../../components/Container";
import {font} from "../../../styles/Common";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding-block: 40px;

  ${Container} {
    position: relative;
  }
`

const Name = styled.span`
  display: inline-block;
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 0.14em;

  @media ${theme.media.mobile} {
    letter-spacing: 0.19em;
  }
`

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 30px auto;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

const GoTopBtn = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.font};

  position: fixed;
  bottom: 28px;
  right: 32px;

  @media ${theme.media.mobile} {
    right: 10px;
  }
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    GoTopBtn,
}