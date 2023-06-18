import styled from "styled-components";
import {MdContactMail} from "react-icons/md"
import useForm from "../hooks/useForm"
import validateFormInfo from '../hooks/validateForm';
import { titles } from '../utility/text/titles';
import { formText } from '../utility/text/formText';
import { Language } from '../utility/types/types';
import { Element } from 'react-scroll'

const Form = styled.form`
    width: 600px;
    margin: 0 0 30px 0;
    background-color: #dde4e4;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        color: #333;
        font-size: 10pt;
        margin: 0;
    }

    @media (max-width: 767px) {
        width: 90%;
    }
`;

const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 0 0 100px 100px;
`;

const HeaderTitle = styled.h1 `
    color: #333;
    font-size: 24pt;
    font-weight: 200;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    margin: 20px 0 10px 0;
`;

const ContactTextWrapper = styled.div`
    width: calc(600px * 0.6);
    padding: 12px 18px;
`;

const Icon = styled.div``

const Paragraph = styled.p``

type FormDataProps = { language: Language }

const FormData = (props: FormDataProps) => {
    const {handleChange, values, handleSubmit, paragraph, formErrors} = useForm(validateFormInfo)

    ///Business logic for the form with custom hook
    
    return(
        <Element name='form'>
            <section className="formWrapper" id="contact">
                <DivWrapper>
                    <HeaderTitle>{titles[props.language].contactUs}</HeaderTitle>
                </DivWrapper>
                <Icon className="iconWrapper">
                    <MdContactMail className="form-icon"/>
                </Icon>
                <ContactTextWrapper className="contactTextWrapper">
                    <Paragraph>{formText[props.language].title}</Paragraph>
                </ContactTextWrapper>
                <Form name="contact-form">
                    {formErrors.name && <p>{formErrors.name}</p>}
                    <label htmlFor="name">First Name</label>
                    <input type="text" value={values.name} name="name" onChange={handleChange} placeholder={formText[props.language].firstName} id="name"></input>
                    {formErrors.lastName && <p>{formErrors.lastName}</p>}
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" value={values.lastName} name="lastName" onChange={handleChange} placeholder={formText[props.language].lastName} id="lastname"></input>
                    {formErrors.email && <p>{formErrors.email}</p>}
                    <label htmlFor="email">Email</label>
                    <input type="text" value={values.email} name="email" onChange={handleChange} placeholder="E-mail" id="email"></input>
                    {formErrors.textArea && <p>{formErrors.textArea}</p>}
                    <label htmlFor="message">Message...</label>
                    <textarea value={values.textArea} name="textArea" onChange={handleChange} placeholder={formText[props.language].message} id="message"></textarea>
                    {paragraph ? paragraph : ""}
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </Form>
            </section>
        </Element>
    )
}

export default FormData