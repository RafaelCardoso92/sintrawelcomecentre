import React from "react";
import { products } from '../utility/text/products';
import { valuesText } from "../utility/text/valuesText";
import styled from "styled-components";
import { valuesImages } from "../utility/images/valuesImages";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import { titles } from "../utility/text/titles";
import FlipCard from "./FlipCard";
import { Language } from "../utility/types/types";
import { Element } from 'react-scroll';

const ProductsWhyContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`

const ProductsWhyContentText = styled.h4`
    color: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    font-size: 11pt;
    font-weight: lighter;
`

const ProductsWhyContentImg = styled.img`
    width: 40px;
    height: 40px;
`

const ProductsWhyContentWrapper = styled.div`
    display: flex;
    width: 160px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border-radius: 3px;
    margin: 10px 10px 0 10px;
    padding: 20px 10px 10px 10px;   
`

type ProductsProps = {
    language: Language
}

const Products = (props: ProductsProps) => {
    return(
        <Element name="products">
            <section className="products">
                <AboutUs 
                    language={props.language}
                />
                <div className="products_why_us">
                    <h2>{titles[props.language].whyUs}</h2>
                    <ProductsWhyContent>
                        {valuesText.map((value) => {
                            return Object.values(value[props.language]).map((valueWLang, index) => {
                                const imageValue = Object.values(valuesImages)
                                return <>
                                    <ProductsWhyContentWrapper key={index}>
                                        <ProductsWhyContentImg src={imageValue[index]}/>
                                        <ProductsWhyContentText>{valueWLang}</ProductsWhyContentText>
                                    </ProductsWhyContentWrapper>
                                </>
                            })
                        })}
                    </ProductsWhyContent>
                </div>
                <Banner
                    language={props.language}
                />
                    <h2 className="products_title" id="product">{titles[props.language].ourProducts}</h2>
                <div className="products_content">
                    {products.map(product => {
                        return <FlipCard
                            title={product[props.language].title}
                            image={product.image}
                            language = {props.language}
                            route = {product.route}
                            {...(product[props.language].disclaimer && { disclaimer: product[props.language].disclaimer})}
                        /> 
                    })}
                </div>
            </section>
        </Element>
    )
}

export default Products