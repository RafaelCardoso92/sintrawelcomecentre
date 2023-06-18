import React from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillPhone } from 'react-icons/ai';
import { BsHouseDoorFill } from 'react-icons/bs';
import styled from "styled-components";
import { titles } from "../utility/text/titles";
import ReactGa from "react-ga"
import Link from 'next/link';
import { footerTranslationText } from "../utility/text/footer";
import { Language } from "../utility/types/types";

const FooterSection = styled.section`
    width: 100vw;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 25px 0;
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

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        width: 100%;
        height: 0;
        background-color: #3f853b;
        border-radius: 50%;
    }

    &:hover::after {
        height: 100%;
    }
`

const IconsWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin-right: 5px;
    }
`

const Copyright = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const PhoneDisclaimer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
    color: #3dc050;
    margin-top: 5px;
}
`

const StoreInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StoreInfoParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 10px;
    }
`

const StoreInfoParagraph = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
    color: #fcfcfc;
`

const StoreInfoTitle = styled.h4`
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
    color: #3dc050;
    text-align: center;
    margin: 0;
    font-weight: 200;
`

const StoreInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PrivacyPolicyBtn = styled(Link)`
    width: 220px;
    font-family: 'Raleway', sans-serif;
    padding: 0;
    font-size: 10pt;
    text-align: center;
    color: #fcfcfc;
    text-decoration: none;
    &:hover {
        color: #3dc050;
        background-color: #333;
    }
`

const FooterBottomAreaWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

const DevelopedBy = styled.a`
    font-family: 'Raleway', sans-serif;
    font-size: 8pt;
    color: #fcfcfc;
    text-decoration: none;

    @media (max-width: 767px) {
        margin-left: 5px;
        text-align: center;
    }
`

const Separator = styled.div`
    width: 100vw;
    height: 1px;
    background-color: #dde4e4;
    margin: 20px 0px;
`

const ComplaintBook = styled.div`
    background: url("../images/icon_livro_reclamacoes.png");
    width: 100px;
    height: 44px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    transition: 0.3s ease-in;
    cursor: pointer;

    &:hover{
        background: url("../images/icon_livro_reclamacoes_on.png");
        width: 100px;
        height: 44px;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
`
type FooterProps = { language: Language }

const Footer = (props: FooterProps) => {

    const onClickFb = () => {
        ReactGa.event({
            category:'FB button',
            action: 'FB button clicked'
        })

        window.open('https://www.facebook.com/sintrawelcomecentre')
    }

    const onClickIG = () => {
        ReactGa.event({
            category:'IG button',
            action: 'IG button clicked'
        })

        window.open('https://www.instagram.com/sintrawelcomecentre/')
    }

    const onClickTP = () => {
        ReactGa.event({
            category:'TP button',
            action: 'TripAdvisor button clicked'
        })

        window.open('https://www.tripadvisor.co.uk/Attraction_Review-g189164-d16935621-Reviews-Sintra_Welcome_Centre-Sintra_Sintra_Municipality_Lisbon_District_Central_Portuga.html')
    }

    const onClickWhatsapp = () => {
        ReactGa.event({
            category:'Whatsapp button',
            action: 'Whatsapp button clicked'
        })

        window.open('https://api.whatsapp.com/send?phone=351932086001')
    }
    
    return (
        <FooterSection>
            <StoreInfo>
                <StoreInfoContainer>
                        <StoreInfoTitle>Loja Centro Histórico</StoreInfoTitle>
                    <StoreInfoParagraphWrapper>
                        <AiFillPhone  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph style={{marginRight:'15px'}}>+351 210 521 283<span style={{color: "#3dc050", fontSize:"12pt"}}>&#42;</span></StoreInfoParagraph>
                        <BsHouseDoorFill  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph>Rua Visconde de Monserrate, Loja 40, 2710-591 Sintra</StoreInfoParagraph>
                    </StoreInfoParagraphWrapper>
                        <StoreInfoTitle>Renting Hub Portela Sintra</StoreInfoTitle>
                    <StoreInfoParagraphWrapper>
                        <AiFillPhone  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph style={{marginRight:'15px'}}>+351 210 521 280<span style={{color: "#3dc050", fontSize:"12pt"}}>&#42;</span></StoreInfoParagraph>
                        <BsHouseDoorFill  style={{width:"20px", height: "20px", color:"#3dc050", marginRight: '5px'}} /><StoreInfoParagraph>Av. Dr. Álvaro de Vasconcelos,4B, Portela de Sintra, 2710-420 Sintra</StoreInfoParagraph>
                    </StoreInfoParagraphWrapper>
                </StoreInfoContainer>
            </StoreInfo>
            <PhoneDisclaimer>
                <span style={{fontSize:"12pt"}}>&#42;</span>{footerTranslationText[props.language].disclaimer}
            </PhoneDisclaimer>
            <Copyright>
                <p className="copyrightText" style={{color:'#3fda45', fontFamily:'"Raleway", sans-serif'}}>Sintra Welcome Centre
                    <span style={{color:'#fcfcfc', fontFamily:'"Raleway", sans-serif', fontSize:'9pt', marginLeft:'5px'}}>{'\u00A9'}2021</span>
                </p>
            </Copyright>
            <FooterBottomAreaWrapper>
                <DevelopedBy href="https://meetjorge.netlify.app/#/">Developed by JG</DevelopedBy>
                <PrivacyPolicyBtn href={"/privacypolicy"}>{titles[props.language].privacyPolicy}</PrivacyPolicyBtn>
                <ComplaintBook onClick={() => window.open('https://www.livroreclamacoes.pt')}/>
            </FooterBottomAreaWrapper>
            <Separator/>
                <IconsWrapper>
                    <IconWrapper>
                        <FaFacebook onClick={onClickFb} style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                    <IconWrapper onClick={onClickIG} style={{marginLeft:"15px"}}>
                        <FaInstagram style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                    <IconWrapper onClick={onClickTP} style={{marginLeft:"15px"}}>
                        <FaTripadvisor style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                    <IconWrapper onClick={onClickWhatsapp} style={{marginLeft:"15px"}}>
                        <IoLogoWhatsapp style={{width:"15px", height: "15px", color:"#fcfcfc", zIndex:10}}/>
                    </IconWrapper>
                </IconsWrapper>
            
        </FooterSection>
    )
}

export default Footer;