import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { galleryImages } from '../utility/images/galleryImages';
import SwipperGallery from './SwipperGallery';
import { partnersText } from "../utility/text/partnersText";
import { titles } from '../utility/text/titles';
import { Language } from '../utility/types/types';
import { Element } from 'react-scroll';


const GallerySection = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #fcfcfc;
    position: relative;
    padding: 30px 0 30px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        padding: 10px 0 0 0;
    }
`

const GalleryWrapper = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    flex-wrap: wrap;
`

const GalleryImage = styled.div<{imageSrc: string, imageTitle: string}>`
    background-image: ${props => `url('${props.imageSrc}')`};
    min-width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    margin: 10px;
    border-radius: 5px;

    &:after {
        content: '${props => props.imageTitle}';
        background-color: #000000;
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Raleway';
        font-size: 16pt;
        transition: 0.3s ease-in;
        border-radius: 5px;
    }

    &:hover::after {
        opacity: 0.8;
    }

    @media (max-width: 767px) {
        min-width: 150px;
        height: 150px;

        &:after {
            font-size: 9.5pt;
        }
    }
`

const GalleryImageWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
`

const GalleryTitle = styled.h2 `
    font-family: 'Raleway', sans-serif;
    color: #2a2d32;
    font-size: 22pt;

    @media (max-width: 767px) {
        margin-bottom: 25px;
        text-align: center;
    }
`

const PartnerShipTitle = styled.h3`
    font-family: 'Raleway',sans-serif;
    color: #333;
    font-size: 18pt;
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
`

const PartnerShipImage = styled.div<{imageSrc:string}>`
    background-image: ${({imageSrc}) => `url('${imageSrc}')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 150px;
    height: 150px;
    margin: 0 15px;
    margin-top: 5px;
    background-color: white;

    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
        margin: 10px 0;
    }
`

const PartnerShipWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 10px auto 30px auto;
    background-color: #dde4e4;
    padding: 20px 0;
    flex-wrap: wrap;
`

const PartnerShipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
    width: 100%;
    margin-top: 60px;
    padding-top: 10px;
`

const PartnerShipLink = styled.a`
    @media (max-width: 767px) {
        width: 50%;
        display: flex;
        justify-content: center;
    }
`

const partnersImagesArray = [
    ["./images/PartnerLogos/cascaisShopping.png", "https://www.cascaishopping.pt/en/home/"],
    ["./images/PartnerLogos/ADEGAfundobranco.jpg", "https://www.adegaviuvagomes.com"],
    ["./images/PartnerLogos/Logo_Freeport.jpg", "https://freeportfashionoutlet.pt"],
    ["./images/PartnerLogos/logotipo_penaaventura.png", "https://www.penaaventura.com.pt/"],
    ["./images/PartnerLogos/zoovertical.jpg", "https://www.zoo.pt/"],
    ["./images/PartnerLogos/piriquita_logo.png", "https://piriquita.pt/"],
    ["./images/PartnerLogos/centrohipico_logo.jpg", "https://www.centrohipicocostaestoril.com"],
    ["./images/PartnerLogos/furnas.png", "https://www.furnasdoguincho.pt/"],
    ["./images/PartnerLogos/DP_logo.png", "https://www.dinoparque.pt/"],
    ["./images/PartnerLogos/natapura.jpg", "#"],
    ["./images/PartnerLogos/mourisca.jpg", "#"],
    ["./images/PartnerLogos/bouldersintra.jpg", "https:/www.instagram.com/bouldersintra/"],
    ["./images/PartnerLogos/LogoSapa.jpg", "https://www.facebook.com/queijadasdasapa/"],
    ["./images/PartnerLogos/LogoBiester-01.png", "https://www.biester.pt"],
    ["./images/PartnerLogos/PenhaLonga.png", "https://www.penhalonga.com/"],
    ["./images/PartnerLogos/casa_do_prego.png", "https://www.tripadvisor.com/Restaurant_Review-g189164-d23959309-Reviews-Casa_Do_Prego_Vila_De_Sintra-Sintra_Sintra_Municipality_Lisbon_District_Central_.html"],
]

const renderImages = () => {
    return Object.entries(galleryImages).map((entry) => {
        return <GalleryImage imageSrc={entry[1]} imageTitle={entry[0]} />
    })
}

type GalleryProps = { language: Language };

const Gallery = (props: GalleryProps) => {
    const partnerTitle = partnersText.map((text) => {
        return text[props.language].title
    })

    const partnerImages = partnersImagesArray.map((image) => {
        return <PartnerShipLink href={image[1]}><PartnerShipImage imageSrc={image[0]}/></PartnerShipLink>
    })

    const [isMobileDevice, setIsMobileDevice] = useState<boolean>();

    useEffect(() => {
        const isMobileDevice = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        setIsMobileDevice(isMobileDevice())
    },[])

    return(
        <Element name='gallery'>
            <GallerySection id="places">
                <GalleryTitle>{titles[props.language].placesNoMiss}</GalleryTitle>
                {isMobileDevice ? (
                    <SwipperGallery imageData={galleryImages}/>
                ) : (
                <GalleryWrapper id="wrapper"> 
                    <GalleryImageWrapper>
                        {renderImages()}
                    </GalleryImageWrapper>
                </GalleryWrapper>

                )}
                <PartnerShipContainer>
                    <PartnerShipTitle>{partnerTitle}</PartnerShipTitle>
                    <PartnerShipWrapper>
                        {partnerImages}
                    </PartnerShipWrapper>
                </PartnerShipContainer>
            </GallerySection>
        </Element>
    )
}

export default Gallery;