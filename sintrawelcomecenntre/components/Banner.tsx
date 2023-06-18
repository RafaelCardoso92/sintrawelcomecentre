import React from 'react';
import styled from "styled-components";
import { bannerText } from '../utility/text/banner';
import { Language } from '../utility/types/types';

const BannerWrapper = styled.div`
    width: 100%;
    background-color: #dce4e4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 65px 0 ;

    @media (max-width: 767px) {
        margin: 65px 0 50px 0;
        padding-bottom: 10px;
    }
`

const BannerTitle = styled.h2`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #2A2D32;
    font-size: 28pt;
    margin-bottom: 0;
    white-space: pre-line;

    @media (max-width: 767px) {
        font-size: 22pt;
    }
`

const BannerParagraph = styled.p`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #2A2D32;
    width: 40%;
    white-space: pre-line;
    font-size: 13pt;

    @media (max-width: 767px) {
        width: 80%;
        font-size: 11pt;
        white-space: normal;
    }
`

type BannerProps = { language: Language }

const Banner = (props: BannerProps) => {

    return(
        <BannerWrapper>
            <BannerTitle>
                {bannerText.map(entry => {
                    return entry[props.language].title
                })}
             </BannerTitle>
            <BannerParagraph>
                {bannerText.map(entry => {
                    return entry[props.language].text
                })}
            </BannerParagraph>
        </BannerWrapper>
    )
}

export default Banner;