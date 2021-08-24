import React from 'react';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer } from './Styles/Container.styles';
import { StyledTitle } from './Styles/Custom.styles';
import { H1, Image, P, Tag } from './Styles/Elements';

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag background="green">EXCLUSIVE</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" color="#fff" />
                </H1>
                <P>Exclusice React JS Turorial on Styled Components</P>
                <ButtonContainer>
                    <Button link="https://styled-components.com/" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src="./Images/tipu.png" alt="Tipu" width="300px" />
        </CardContainer>
    );
}
