import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({name: "", email: "", request: ""})
    const { name, email, request } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form className='contact-form' onSubmit={onSubmit}>
                <FormControl margin='normal' fullWidth>
                    <InputLabel>Name</InputLabel>
                    <Input name="name" value={name} onChange={onChange} required/>
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel>Email</InputLabel>
                    <Input name="email" type="email" value={email} onChange={onChange} required/>
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel>Request</InputLabel>
                    <Input name="request" type="text" value={request} onChange={onChange} required multiline rows={10}/>
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Contact