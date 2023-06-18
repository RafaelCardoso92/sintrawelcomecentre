import React from "react";
import styled from "styled-components";
import { maps } from "../utility/text/maps";
import { titles } from "../utility/text/titles";
import MapCard from "./MapCard";
import { Language } from "../utility/types/types";
import { Element } from 'react-scroll'

const MapsSection = styled.section`
    display: flex;
    width: 100vw;
    background-color: #dde4e4;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;
`

const MapsTitle = styled.h2 `
    font-family: 'Raleway', sans-serif;
    color: #2a2d32;
    font-size: 22pt;

    @media (max-width: 767px) {
        margin-bottom: 25px;
        text-align: center;
    }
`

const MapsWrapper = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

type MapsProps = { language: Language }

const Maps = (props: MapsProps) => {
    return(
        <Element name="maps">
            <MapsSection id="maps">
                <MapsTitle>{titles[props.language].maps}</MapsTitle>
                <MapsWrapper>
                    {maps.map(map => {
                        return <MapCard
                            image={map.image}
                            title={map[props.language].title}
                            monument={map.monument}
                        />
                    })}
                </MapsWrapper>
                
            </MapsSection>
        </Element>
    )
}

export default Maps