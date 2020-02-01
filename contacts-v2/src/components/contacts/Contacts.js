import React, { Component } from 'react'
import './Contacts.css';
import ContactList from '../contactList/ContactList'
import ContactForm from '../contactForm/ContactForm'

export default class Contacts extends Component {
    state = {
        selectedContact: this.getEmptyContact(), 
        contacts: [
            {
                "id": 1,
                "age": 33,
                "name": "Leanne",
                "surname": "Graham",
                "phone": "1-770-736-8031 x56442",
            },
            {
                "id": 2,
                "age": 33,
                "name": "Ervin",
                "surname": "Howell",
                "phone": "010-692-6593 x09125",
            },
            {
                "id": 3,
                "age": 33,
                "name": "Clementine",
                "surname": "Bauch",
                "phone": "1-463-123-4447",
            },
            {
                "id": 4,
                "age": 33,
                "name": "Patricia",
                "surname": "Lebsack",
                "phone": "493-170-9623 x156",
            },
            {
                "id": 5,
                "age": 33,
                "name": "Chelsey",
                "surname": "Dietrich",
                "phone": "(254)954-1289"
            },
            {
                "id": 6,
                "age": 33,
                "name": "Dennis",
                "surname": "Schulist",
                "phone": "1-477-935-8478 x6430",
            },
            {
                "id": 7,
                "age": 33,
                "name": "Kurtis",
                "surname": "Weissnat",
                "phone": "210.067.6132",
            },
            {
                "id": 8,
                "age": 33,
                "name": "Nicholas",
                "surname": "Runolfsdottir V",
                "phone": "586.493.6943 x140",
            },
            {
                "id": 9,
                "age": 33,
                "name": "Glenna",
                "surname": "Reichert",
                "phone": "(775)976-6794 x41206",
            },
            {
                "id": 10,
                "age": 33,
                "name": "Clementina",
                "surname": "DuBuque",
                "phone": "024-648-3804",
            }
        ]
    };

    getEmptyContact() {
        return {
            "id": "",
            "age": "",
            "name": "",
            "surname": "",
            "phone": ""
        }
    }

    deleteContact = (id) => {
        const newContacts = this.state.contacts.filter(item =>{
            return item.id !== id;
        });

        this.setState({
            contacts: newContacts,
            selectedContact: this.getEmptyContact()
        });
    }

    onFormChange = (chenges) => {
        console.log(chenges);
        this.setState ({
            selectedContact: {
                ...this.state.selectedContact,
                ...chenges,
            }
        });
    };

    onSelectContact = (contact) => {
        contact.id = Number(contact.id);
        contact.age = Number(contact.age);
        this.setState({
            selectedContact: contact
        });console.log(contact);
    }

   

    onSaveContactBtnClick = (contact) => {
        contact.age = Number(contact.age);
        contact.id === ""? this.createContact(contact) : this.updateContact(contact);
    }

    updateContact = (contact) => {
        contact.id = Number(contact.id);
        contact.age = Number(contact.age);
        const newContacts = this.state.contacts.map(el => el.id === contact.id? contact: el)
        this.setState({
            contacts: newContacts,
            selectedContact: this.getEmptyContact()
        })
        
    }

    createContact = (contact) =>{
        contact.id = Date.now();
        contact.age = Number(contact.age);
        this.setState({
            contacts : [...this.state.contacts, contact],
            selectedContact: this.getEmptyContact()
        })
    }

    onAddBtnClick = () => {
        this.setState({
            selectedContact: this.getEmptyContact()
        })
    }


    
    render() {
        return (
            <>
                <div className ="leftPart">
                    <ContactList 
                    contacts={this.state.contacts} 
                    onDelete ={this.deleteContact}
                    onSelectContact ={this.onSelectContact}/>
                    <button className = "addNewContactBtn" onClick = {this.onAddBtnClick}>Add New Contact</button>
                </div>
                <div className ="rightPart">
                    <ContactForm 
                    key = {this.state.selectedContact.id}
                    contact = {this.state.selectedContact}
                    onChange = {this.onFormChange}
                    onSaveContactBtnClick = {this.onSaveContactBtnClick} />
                </div>
            </>
        )
    }
}
