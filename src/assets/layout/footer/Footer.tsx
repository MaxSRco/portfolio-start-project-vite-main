import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
                <Copyright>© 2023 Sergey Maksimov. All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
  background-color: #ffd8a5;
  min-height: 30vh;
`

const Name = styled.span`
  display: inline-block;
`

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`