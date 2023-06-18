import React from 'react';
import styled from "styled-components";
import { titles } from '../utility/text/titles';
import {GrSchedule} from 'react-icons/gr'
import {GiSandsOfTime} from 'react-icons/gi';
import {IoLogoWhatsapp} from 'react-icons/io';
import ReactGa from "react-ga"
import Link from 'next/link';
import { Language } from '../utility/types/types';

const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    
`

const FlipCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    align-items: center;
    border-radius: 10px;
    perspective: 1000px;

    &:hover ${FlipCardInner} {
        transform: rotateY(180deg);
    }

    &:first-child {
        margin-right: 30px;
    }

    &:nth-child(2) {
        margin-right: 30px;
    }

    &:last-child {
        margin-left: 30px;
    }

    @media (max-width: 767px) {
        &:first-child {
            margin-right: 10px;
            margin-bottom: 15px;
        }

        &:last-child {
            margin-left: 10px;
        }

        &:nth-child(2) {
            margin-right: 0px;
        }
    }

    @media (max-width: 480px) {
        &:first-child {
            margin-bottom: 15px;
            margin-right: 0px;
        }

        &:nth-child(2) {
            margin-bottom: 15px;
        }

        &:last-child {
            margin-left: 0px;
            margin-top: 15px;
        }
    }
`

const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const FlipCardBack = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
`

const FlipCardBackIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const FlipCardBackText = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #575757;
    font-size: 11pt;
    line-height: 20pt;
    text-align: justify;
`

const FlipCardBackTextCentered = styled.p`
    font-family: 'Raleway', sans-serif;
    color: #575757;
    font-size: 11pt;
    line-height: 20pt;
    text-align: center;
    margin-bottom: 12px !important;
`

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5b6d75;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #3dc050;
    }
`

const CardImageWrapper = styled.div`
    width: 250px;
    height: 250px;
`

const CardImage = styled.div<{ image: string }>`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 250px;
    width: 100%;
    background-image: ${props => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const CardWrapperContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 150px;
`

const CardDescription = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
    text-decoration: underline;
    text-align: left;
    margin: 5px 0 0 10px;
`

const CardTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #333;
    margin-left: 10px;
`

const CardButton = styled(Link)`
    padding: 13px 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: 'Raleway';
    font-size: 11pt;
    background-color: #333;
    color: #fcfcfc;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #fcfcfc;
        color: #333;
    }
`

type FlipCardProps = {
    title: string,
    image: string,
    language: Language,
    disclaimer?: string,
    route: string
}

const FlipCard = (props: FlipCardProps) => {

    const onClickWhatsapp = () => {
        ReactGa.event({
            category:'Whatsapp button',
            action: 'Whatsapp button clicked'
        })

        window.open('https://api.whatsapp.com/send?phone=351932086001')
    }


    return (
        <FlipCardWrapper>
            <FlipCardInner>
                <FlipCardFront>
                    <CardImageWrapper>
                        <CardImage image={props.image}/>
                    </CardImageWrapper>
                    <CardWrapperContent>
                        <CardDescription>{titles[props.language].cardTitle}</CardDescription>
                        <CardTitle>{props.title}</CardTitle>
                    </CardWrapperContent>
                </FlipCardFront>
                <FlipCardBack>
                    {props.disclaimer ? 
                        <>
                            <FlipCardBackIconWrapper>
                                <GrSchedule/>
                                <p style={{fontSize: "11pt", margin:"2px 0 5px 5px"}}>12:00/15:00/17:00</p>
                            </FlipCardBackIconWrapper>
                            <FlipCardBackIconWrapper>
                                <GiSandsOfTime/>
                                <p style={{fontSize: "11pt", margin:"5px 0 2px 5px"}}>1h/1h30m</p>
                            </FlipCardBackIconWrapper>
                            <FlipCardBackText>
                                {props.disclaimer}
                            </FlipCardBackText>
                            <FlipCardBackTextCentered>
                                Contact us:
                            </FlipCardBackTextCentered>
                            <FlipCardBackIconWrapper>
                                <IconWrapper onClick={onClickWhatsapp} style={{marginLeft:"15px"}}>
                                    <IoLogoWhatsapp style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                                </IconWrapper>
                            </FlipCardBackIconWrapper>
                            <FlipCardBackIconWrapper>
                                <FlipCardBackText>+351 932 086 001</FlipCardBackText>
                            </FlipCardBackIconWrapper>
                        </>
                        :
                        <CardButton href={`${props.route}?lang=${props.language}`} hrefLang={props.language}>{titles[props.language].cardButton}</CardButton>
                    }
                    
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardWrapper>
    )
}

export default FlipCard;