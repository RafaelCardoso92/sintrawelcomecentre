import React, { useEffect } from "react";
import styled from "styled-components";
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';


const PrivacyPolicySection = styled.section`
    display: flex;
    flex-direction: column;
`

const ProductsTitleWrapper = styled.div`
    width:100%;
    justify-content: center;
    display: flex;
    background-color: #333;
    margin-bottom: 20px;
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

const PolicyTextWrapper = styled.div`
    justify-content: center;
    display: flex;
`

const PolicyTexty = styled.p`
    white-space: pre-line;
    font-family: Raleway, sans-serif;
    width: 80%;
    text-align: center;
`


const text = `PRIVACY POLICY\n
Your privacy is important to us, so we respect it and are committed to protecting it as stipulated in the Regulamento Geral de Proteção de Dados Pessoais (RGPD) and other applicable national legislation. To better protect your privacy, we introduce our privacy practices and options available for how your information is collected and used.
If you are concerned about how the information provided through our website is handled, please do not hesitate to present all your questions to us.
By accessing our website you are committed to accepting and complying with this Privacy Policy.

 WHAT KIND OF PERSONAL INFORMATION DO WE COLLECT?\n
We ask for personally identifiable information when booking a service, requesting a quote, exchanging correspondence with us or participating in certain other activities.
It is the User who decides whether to proceed with any activity that requests personal information.
However, if you do not wish to provide the requested personal information, you may not be able to complete the transaction and/or contract services.

 HOW DO WE PROTECT YOUR PERSONAL INFORMATION?\n
To ensure the security of your personal information, we have established a number of security and protection measures. Your personal information is stored on secure networks, which can only be accessed by a limited number of persons who hold the right to special access and undertake to respect and maintain the confidential nature of such information.


WHO HAS ACCESS TO PERSONAL INFORMATION?\n
In addition to our company and the effects described above, we do not sell, exchange or transfer your personal information to third parties in any form. Your personal information may be transferred to subcontracted external suppliers to provide certain services to us. We require such contracted suppliers to keep our customers' personal information secure and confidential.
We also require these suppliers to use personal information only on behalf of SINTRA WELCOME CENTRE.
We may also disclose your data when we believe it is appropriate to comply with the law or enforce the policies of our website, protect our rights, property and the safety of others.
You may at any time choose not to share your information with third parties. Such a request can be made through our website or by sending us an email.

LINKS\n
In order to improve the services offered, we may include third-party links on the site. SINTRA WELCOME CENTRE is not responsible for the privacy policy practices of these websites. We recommend that you read their privacy policies as they may be different from ours. SINTRA WELCOME CENTRE cannot be held responsible for the content and activities of these websites.
However, we seek to protect the integrity of our site and appreciate any feedback on these sites.

INFORMATION ABOUT COOKIES\n
Cookies are small information files sent from the website or server to your computer's hard drive through the Web Browser (if authorized) and that allow websites or service providers to recognize your browser, and capture and remember certain data.
We use cookies to keep track of ads and improve your browsing experience.

TERMS AND CONDITIONS\n
Please also access our Terms and Conditions, where the use, waivers and limits of liability governing the use of our website are established.

AUTHORIZATION\n
By using our website, you agree to our privacy policy.

CHANGES TO OUR PRIVACY POLICY\n
In the future, we may choose to modify or update our privacy policy. Thus, the changes will be published on this page, and the date of modification of the Privacy Policy below will be updated.  
This Privacy Policy was last modified on 11/19/2021.\n

For any questions regarding this Privacy Policy and privacy aspects of our products and services, please contact:
B.S.B. - Serviços de Turismo, Lda
Avenida Dr. Álvaro de Vasconcelos, nº4B,
2710-420 Portela de Sintra
T.: +351 210 521 280
@.: info@sintrawelcomecentre.com
Web: www.sintrawelcomecentre.com`

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return(
        <PrivacyPolicySection>
                <ProductsTitleWrapper>
                    <GoBackWrapper>
                        <AiOutlineHome style={{color:"#fcfcfc"}}/><GoBackText href="/">Go Back</GoBackText>
                    </GoBackWrapper>
                    <ProductsTitle>Privacy Policy</ProductsTitle>
                </ProductsTitleWrapper>
                <PolicyTextWrapper>
                    <PolicyTexty>{text}</PolicyTexty>
                </PolicyTextWrapper>
        </PrivacyPolicySection>
    )
}

export default PrivacyPolicy