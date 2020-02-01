import React, { Component } from 'react'
import "./ContactListItem.css"
import propTypes from '../../propTypes';

export default class ContactListItem extends Component {
    onDeleteBtnClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.contact.id);
    }

    onItemRowClick = () => {
        this.props.onSelectContact(this.props.contact);
    }

    render() {
        const {contact} = this.props;
        return (
            <div className = "row" onClick = {this.onItemRowClick}> 
                <div>{contact.name}</div>
                <div>{contact.surname}</div>
                <button
                    className = "deleteContactBtn"
                    onClick = {this.onDeleteBtnClick}>Delete
                </button>
            </div>
        )
    }
}

ContactListItem.propTypes = {
    contact: propTypes.contact.isRequired,
    onDelete: propTypes.func.isRequired,
    onSelectContact: propTypes.func.isRequired
}