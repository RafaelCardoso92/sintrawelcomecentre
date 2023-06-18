import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import { titles } from '../utility/text/titles';
import { Language } from '../utility/types/types';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;

    &:first-child {
        margin-right: 30px;
    }

    &:last-child {
        margin-left: 30px;
    }

    @media (max-width: 767px) {
        &:first-child {
            margin-right: 0;
            margin-bottom: 15px;
        }

        &:last-child {
            margin-left: 0;
            margin-top: 15px;
        }
    }
`

const CardImageWrapper = styled.div`
    width: 250px;
    height: 200px;
`

const CardImage = styled.div<{image: string}>`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 200px;
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
    padding: 11px 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
    bottom: -22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: 'Raleway';
    font-size: 10pt;
    background-color: #333;
    color: #fcfcfc;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #fcfcfc;
        color: #333;
    }
`

type CardProps = {
    title: string,
    image: string,
    language: Language,
    route: string
}

const Card = (props: CardProps) => {
    return (
        <CardWrapper>
            <CardImageWrapper>
                <CardImage image={props.image}/>
            </CardImageWrapper>
            <CardWrapperContent>
                <CardDescription>{titles[props.language].cardTitle}</CardDescription>
                <CardTitle>{props.title}</CardTitle>
                <CardButton href={props.route} hrefLang={props.language}>{titles[props.language].cardButton}</CardButton>
            </CardWrapperContent>
        </CardWrapper>
    )
}

export default Card;