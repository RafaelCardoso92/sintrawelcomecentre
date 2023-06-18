import React from "react";
import styled from "styled-components";
import { BsPerson, BsXCircle } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";
import { FiThumbsUp } from 'react-icons/fi';
import SwipperGalleryTukTuk from "./SwipperGalleryTukTuk";
import { tuktukmodaltext } from "../utility/text/tuktukmodaltext";
import { Language } from "../utility/types/types";


const Animation = styled.div<{divOpacity: boolean, animate: boolean}> `
    opacity: ${({divOpacity}) => (divOpacity ? "1" : "0")};
    transform: ${({ animate }) => (animate ? "translateY(0vh)" : "translateY(-100vh)")};
    transition: all 0.5s;
    display: flex;
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 11;
`

const Modal = styled.div`
    position: fixed;
    display: flex;
    width: 800px;
    min-height: 500px;
    background-color: #fcfcfc;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        width:100%;
        height: 100vh;
    }
`

const ModalTitle = styled.h2`
    font-family: Raleway, sans-serif;
    color: #333;
    text-align: center;

    @media (max-width: 800px) {
        margin-top: 50px;
    }
`

const ModalIconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
`

const IconsText = styled.p`
    color: #333;
    font-size: 10pt;
    font-family: 'Raleway', sans-serif;
    margin-left: 5px;
`
const TourDescription = styled.p`
    color: #333;
    width: 70%;
    text-align: center;
    font-size: 10pt;
`

const DescriptionTitle = styled.h3`
    color: #333;
    font-size: 14pt;
    font-family: 'Raleway', sans-serif;
`

const Separator = styled.div`
    width: 80%;
    height:1px;
    background-color: #333;
    margin-top: 15px;
    margin-bottom: 15px;
    opacity: 0.3;
`

type TukModalProps = {
    data: Array<string>,
    showModal: boolean,
    imageData: Array<string>,
    closeModal: () => void,
    language: Language
}

const TukModal = (props: TukModalProps) => {
    return(
        <>
        { props.data &&
        <Animation animate={props.showModal} divOpacity={props.showModal}>
            <Modal>
                <ModalTitle>{ props.data[0] }</ModalTitle>
                <BsXCircle onClick={props.closeModal} style={{position: "absolute", top: '8px', right: '8px', color:'#333', width:'30px', height:'30px', cursor:'pointer'}}/>
                <SwipperGalleryTukTuk imageData={ props.imageData } />
                <Separator/>
                <DescriptionTitle>{tuktukmodaltext[props.language].title}</DescriptionTitle>
                <TourDescription>
                    {props.data[2]}
                </TourDescription>
                <Separator/>
                <ModalIconsWrapper>
                    <IconsContainer>
                        <FiThumbsUp style={{color:"#333", width:'22px', height:'22px'}}/><IconsText>{tuktukmodaltext[props.language].free}</IconsText>
                    </IconsContainer>
                    <IconsContainer>
                        <BsPerson style={{color:"#333", width:'22px', height:'22px'}}/><IconsText>{tuktukmodaltext[props.language].live}</IconsText>
                    </IconsContainer>
                    <IconsContainer>
                        <RiMentalHealthLine style={{color:"#333", width:'22px', height:'22px'}}/><IconsText>{tuktukmodaltext[props.language].covid}</IconsText>
                    </IconsContainer>
                    <IconsContainer>
                        <GiDuration style={{color:"#333", width:'22px', height:'22px'}}/><IconsText>{props.data[1]}</IconsText>
                    </IconsContainer>
                </ModalIconsWrapper>
            </Modal>
        </Animation>
    }
    </>
    )
}

export default TukModal