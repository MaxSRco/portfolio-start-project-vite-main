import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #d4d4f8;
`