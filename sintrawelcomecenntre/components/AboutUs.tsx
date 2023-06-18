import React from "react";
import { aboutUsText } from "../utility/text/aboutUs";
import styled from "styled-components";
import { titles } from "../utility/text/titles";
import { Language } from "../utility/types/types";
import { Element } from 'react-scroll'

const AboutUsSection = styled.section `
    width:100vw;
    background-color: #dce4e4;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    z-index: 10;
    padding-bottom: 60px;
`

const AboutUsWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    min-height: 250px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    padding: 5px;
    background-color: #009688;

    @media (max-width: 767px) {
        width: 80%;
        height: 250px;
    }
`

const AboutUsHeader = styled.h2 `
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 30px 0 45px 0;
    color: #333;
    text-align: center;
    font-size: 24pt;
    font-weight: 200;

    @media (max-width: 767px) {
        padding: 25px 0 0 0;
    }
`

const AboutUsImage = styled.div `
    background-image: url('./images/Foto_AboutUs.jpg');
    background-repeat: no-repeat;
    width: 600px;
    background-size: cover;
    z-index: 10;
    height: 450px;
    @media (max-width: 767px) {
        width: 80%;
        height: 260px;
    }
`

const AboutUsText = styled.p `
    width: 80%;
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    line-height: 2.2;
    font-size: 14pt;
    text-align: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }

    @media (max-width: 767px) {
        font-size: 11pt;
        line-height: 1.8;
        width: 90%;
    }
`

type AboutUsProps = { language: Language }

const AboutUs = (props: AboutUsProps) => {
    const aboutUs = aboutUsText.map((content, index) => {
        const values = content[props.language]
        if(index === 0) {
            return <>
                <AboutUsWrapper>
                    <AboutUsText>{values.text}</AboutUsText>
                </AboutUsWrapper>
                
            </>
        }    
    })

    return (
        <Element name="aboutUs">
            <AboutUsSection id="aboutus">
                <AboutUsHeader>{titles[props.language].aboutUs}</AboutUsHeader>
                <AboutUsImage />
                {aboutUs}
            </AboutUsSection>
        </Element>
    )
}

export default AboutUs