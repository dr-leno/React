import React from 'react';
import Input from './Input';

//console log оставила только чтоб видеть значения после сабмита
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            values: {
                email: '', 
                password: '',
                firstname: '',
                lastname: '',
            },
            touched: {},
            errors: {},
            isValid: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.values);
        e.target.reset();
    }

    handleChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value 
        };

        const errors = this.validate(values);

        this.setState({
            values: values,
            errors: errors,
            touched: {
                ...this.state.touched,
                [e.target.name]: true
            },
            isValid: Object.keys(errors).length === 0
        });
    }

    validate = ({ email, password, firstname, lastname }) => {
        const errors = {};
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
        const nameRegex = /^[a-zA-Z]{2,}$/;


        if(!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
        }

        if(!passwordRegex.test(password)) {
            errors.password = 'Password must contain at least 1 uppercase letter, 1 digit, 6-10 characters';
        }

        if(!nameRegex.test(firstname)) {
            errors.firstname = 'Please enter a valid first name (minimum 2 characters, no numbers)';
        }

        if(!nameRegex.test(lastname)) {
            errors.lastname = 'Please enter a valid last name (minimum 2 characters, no numbers)';
        }
        return errors;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    name="email"
                    placeholder="email"
                    type = "email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                    isTouched={this.state.touched.email}
                    error={this.state.errors.email}
                />
                 <Input 
                    name="password"
                    placeholder="password"
                    type = "password"
                    value={this.state.values.password}
                    onChange={this.handleChange}
                    isTouched={this.state.touched.password}
                    error={this.state.errors.password}
                />
                 <Input 
                    name="firstname"
                    placeholder="firstname"
                    type = "text"
                    value={this.state.values.firstname}
                    onChange={this.handleChange}
                    isTouched={this.state.touched.firstname}
                    error={this.state.errors.firstname}
                />
                 <Input 
                    name="lastname"
                    placeholder="lastname"
                    type = "text"
                    value={this.state.values.lastname}
                    onChange={this.handleChange}
                    isTouched={this.state.touched.lastname}
                    error={this.state.errors.lastname}
                />
                <button disabled={!this.state.isValid}>Submit</button>
            </form>
        )
    }
   
}

export default Form;