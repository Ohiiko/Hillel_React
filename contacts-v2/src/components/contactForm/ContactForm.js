import React, { Component } from 'react'
import './ContactForm.css'
import propTypes from '../propTypes';


export default class ContactForm extends Component {

    onInputChange = (e) => {

        this.props.onChange({
            [e.target.name]: e.target.value
          });    
        }

    onContactFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveContactBtnClick(this.props.contact);
    }

    render() {
        return (
            <form className = "contactForm" onSubmit = {this.onContactFormSubmit}>
                <label>Name</label>
                <input  
                    name = "name" 
                    type = "text"
                    value = {this.props.contact.name}
                    onChange = {this.onInputChange}/>
                <label>Surname</label>
                <input 
                    name = "surname"
                    type = "text"
                    value = {this.props.contact.surname}
                    onChange = {this.onInputChange}/>
                <label>Age</label>
                <input 
                    name = "age" 
                    type = "text" 
                    value = {this.props.contact.age}
                    onChange = {this.onInputChange}/>
                <label>Phone</label>
                <input 
                    name = "phone" 
                    type = "text" 
                    value = {this.props.contact.phone}
                    onChange = {this.onInputChange}/>
                <div>
                    <button className = "submitFormBtn" type="submit">Save Contact</button>
                </div>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onChange: propTypes.func.isRequired,
    onSaveContactBtnClick: propTypes.func.isRequired
}