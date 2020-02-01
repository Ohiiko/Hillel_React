import React, { Component } from 'react'
import './ContactList.css'
import ContactListItem from './contactListItem/ContactListItem'
import propTypes from '../propTypes';



export default class ContactList extends Component {
    
    render() {
        const {contacts, onDelete, onSelectContact} = this.props;
        return (
            <div className = "contactsList">
                <div>
                    {contacts.map(contact => (
                    <ContactListItem key={contact.id} 
                    contact={contact} 
                    onDelete={onDelete}
                    onSelectContact ={onSelectContact}/>))}
                </div> 
            </div>
        )
    }
}

ContactList.propTypes = {
    contacts: propTypes.contacts.isRequired,
    onDelete: propTypes.func.isRequired,
    onSelectContact: propTypes.func.isRequired
}
