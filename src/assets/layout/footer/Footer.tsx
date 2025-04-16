import React from "react";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"

const socialItemsData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "linkedin",
    },
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Name>Sergey</S.Name>
                    <S.SocialList>

                        {socialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon iconId={s.iconId} height={"21px"} width={"21px"}
                                              viewBox={"0 0 21px 21px"}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}

                    </S.SocialList>
                    <S.Copyright>© 2025 Sergey Maksimov. All Rights Reserved.</S.Copyright>
                </FlexWrapper>
                <S.GoTopBtn title={"Go top"}>
                    <Icon iconId={"goTopBtn"} height={"15px"} width={"16px"} viewBox={"0 0 16px 15px"}/>
                </S.GoTopBtn>
            </Container>
        </S.Footer>
    );
};

