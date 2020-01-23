import React, { Component } from 'react'
import ContactListItem from './ContactListItem'

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <div className = "contactsHeader row">
                    <div>Name</div>
                    <div>Surname</div>
                    <div>Age</div>
                    <div>Phone</div>
                </div>
                <div className = "contactsList">
                    <div>
                        {this.props.contacts.map(contactItem => (
                            <ContactListItem key={contactItem.id} item={contactItem} />))}
                    </div>
                </div>
            </div>
        )
    }
}
