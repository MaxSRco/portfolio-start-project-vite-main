import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Sergey</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"instagram"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"telegram"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"vk"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"linkedin"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2025 Sergey Maksimov. All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding-block: 40px;
`

const Name = styled.span`
  display: inline-block;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.14em;
  //color: #fff;
`

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 30px auto;
`

const SocialItem = styled.li`

`

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