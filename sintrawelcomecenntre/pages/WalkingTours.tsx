import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHome } from 'react-icons/ai';
import Footer from "../components/Footer";
import Link from 'next/link';
import { disclaimer } from "../utility/text/disclaimer";
import { isTypeOfLang } from "../utility/types/types";
import { useRouter } from "next/router";

const TukTukSection = styled.section`
    display: flex;
    flex-direction: column;
`

const ProductsTitleWrapper = styled.div`
    width:100%;
    justify-content: center;
    display: flex;
    background-color: #333;
    position: relative;
`

const ProductsTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 18pt;
    text-align: center;
    color: #fcfcfc;
    margin: 0;
    padding: 20px 0;
`

const GoBackWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 10px;
    padding-top: 20px;
`

const GoBackText = styled(Link)`
    font-family: Raleway, sans-serif;
    font-size: 10pt;
    color: #fcfcfc;
    margin: 0 0 0 5px;
    text-decoration: none;
`

const WalkingTours = () => {

    const router = useRouter();
    const lang = router.query.lang;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            <TukTukSection>
                <ProductsTitleWrapper>
                    <GoBackWrapper>
                        <AiOutlineHome style={{color:"#fcfcfc"}}/><GoBackText href="/">Go Back</GoBackText>
                    </GoBackWrapper>
                    <ProductsTitle>Walking Tours</ProductsTitle>
                </ProductsTitleWrapper>
                <div style={{width:'100vw', height:'100vh', backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                  <img style={{width:'350px'}} className="logo" src="../images/logo.png" alt="logo"></img>
                  <h1 style={{color: 'white', fontFamily:'"Raleway", sans-serif', textAlign:'center'}}>{disclaimer[isTypeOfLang(lang) ? lang : 'en'].Coming}</h1>
                  <p style={{color: 'white', fontFamily:'"Raleway", sans-serif', textAlign:'center', width: '80%'}}>{disclaimer[isTypeOfLang(lang) ? lang : 'en'].description}</p>
                </div>
              </div>
            </TukTukSection>
            <Footer
            language = { isTypeOfLang(lang) ? lang : 'en' }
            />
        </>
    )
}

export default WalkingTours;