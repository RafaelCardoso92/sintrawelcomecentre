import React from "react";
import styled from "styled-components";

const pena_en = "../pdfs/Pena_ENG.pdf"
const pena_pt = "../pdfs/Pena_PT.pdf"
const mouros_en = "../pdfs/Mouros_ENG.pdf"
const mouros_pt = "../pdfs/Mouros_PT.pdf"
const vila_en = "../pdfs/Sintra_ENG.pdf"
const vila_pt = "../pdfs/Sintra_PT.pdf"
const biester_pt = "../pdfs/Palacio_Biester_PT.pdf"
const biester_en = "../pdfs/Palacio_Biester_EN.pdf"
const monserrate = "../pdfs/Monserrate_ENG.pdf"

const MapCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 325px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    border-radius: 5px;
    background-color: #e7e7e7;

    &:not(:first-child) {
        margin-left: 30px;
    }

    @media (max-width: 767px) {
        &:first-child {
            margin-right: 0;
            margin-bottom: 15px;
        }

        &:not(:first-child) {
            margin-left: 0px;
        }

        &:nth-child(2) {
            margin-right: 0px;
        }

        &:last-child {
            margin-left: 0;
            margin-top: 15px;
        }
    }
`

const MapCardImageWrapper = styled.div`
    width: 250px;
    height: 200px;
`

const MapCardImage = styled.div<{image: string}>`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 200px;
    width: 100%;
    background-image: ${props => `url("${props.image}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const MapCardWrapperContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 150px;
`

const MapCardTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #333;
    margin: 0;
    padding: 10px 0 10px 0;
    background-color: #dce4e4;
    text-align: center;
`

const MapCardTitle2 = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #333;
    font-size: 14px;
    text-align: center;
`

const MapFlag = styled.div`
    display: flex;
    justify-content: space-around;
`

const chooseFile = (monumentLang: string) => {
    switch (monumentLang) {
        case "pena_en":
            return pena_en
        case "pena_pt":
            return pena_pt
        case "mouros_en":
            return mouros_en
        case "mouros_pt":
            return mouros_pt
        case "vila_en":
            return vila_en
        case "vila_pt":
            return vila_pt
        case "monserrate_pt":
            return monserrate
        case "monserrate_en":
            return monserrate
        case "biester_pt":
            return biester_pt
        case "biester_en":
            return biester_en
        default:
            break;
    }
}

type MapCardProps = {
    image: string,
    title: string,
    monument: string
}

const MapCard = (props: MapCardProps) => {

    const handleDownload = (file: string) => {
        const fileUrl = file;
        const link = document.createElement('a');
        if(fileUrl) {
            link.href = fileUrl;
            link.download = fileUrl;
            link.click();
        }
    }

    return(
        <MapCardWrapper>
            <MapCardImageWrapper>
                <MapCardImage image={props.image}/>
            </MapCardImageWrapper>
            <MapCardWrapperContent>
                <MapCardTitle>{props.title}</MapCardTitle>
                <MapCardTitle2>Download</MapCardTitle2>
                <MapFlag>
                    <div onClick={() => handleDownload(chooseFile(`${props.monument}_en`)!)}>
                        <img style={{height: "20px", width:"30px"}} src={"../images/Flags/united-kingdom.png"}/>
                    </div>
                    <div onClick={() => handleDownload(chooseFile(`${props.monument}_pt`)!)}>
                        <img style={{height: "20px", width:"30px"}} src={"../images/Flags/portugal-flag-small.png"}/>
                    </div>
                </MapFlag>
            </MapCardWrapperContent>
        </MapCardWrapper>
    )
}

export default MapCard