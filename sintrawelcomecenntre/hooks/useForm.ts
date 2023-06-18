import {useState} from 'react'
import emailjs from "emailjs-com"
import validateFormInfo from './validateForm';
import ReactGa from 'react-ga'

type Submission = {
    isSubmitted: boolean
}

type Error = {
    isError: boolean
}

export type FormValues = {
    name: string;
    lastName: string;
    email: string;
    textArea: string;
}

const useForm = (validate: (values: FormValues) => Record<string, string>) => {
    const [values, setValues] = useState<FormValues>({
        name: "",
        lastName: "",
        email:"",
        textArea: ""
    })

    const [formErrors, setFormErrors] = useState<Record<string, string>>({})

    const handleChange = (event: any) => {
        const {name, value} = event.target

        setValues({
            ...values,
            [name]:value
        })
    }

    const [isSubmitted, setSubmitted] = useState<Submission>({ isSubmitted:  false })
    const [isError, setError] = useState<Error>({ isError: false })

    const handleSubmit = (event: any) => {
        event.preventDefault()
        ReactGa.event({
            category:'Form button',
            action: 'Form button button clicked'
        })
        const errors = validate(values)
        setFormErrors(errors)
        
        ///only submit if we have no errors
        if(errors
            && Object.keys(errors).length === 0
            && Object.getPrototypeOf(errors) === Object.prototype) {
                const templateParameters = {
                    from_name: values.name + " " + values.lastName,
                    to_name: "info@sintrawelcomecentre.com",
                    message: values.textArea,
                    email: values.email,
                }
                
                const name = document.getElementById("name")
                const lastname = document.getElementById("lastname")
                const email = document.getElementById("email")
                const message = document.getElementById("message")

            emailjs
            .send("default_service", "template_1oixrtt", templateParameters, "user_nibGXcWm9DhkdSVEaAZHw")
            .then((result) => {
                setSubmitted({isSubmitted:true})
                if(name !== null && lastname !== null && email !== null && message !== null) {
                    name.innerText = ""
                    lastname.innerText = ""
                    email.innerText = ""
                    message.innerText = ""
                }
            }, (error) => {
                setError({isError:true})
            })
        }
        
    }

    let paragraph: string = '';

    if(isSubmitted && paragraph) {
        paragraph = 'Message has been sent!'
    } else if (isError && paragraph) {
        paragraph = 'There has been an error submitting your message. Please try again'
    }
    
    return {handleChange, values, handleSubmit, paragraph, formErrors}
}

export default useForm