import React, { Component } from 'react'

export default class ContactListItem extends Component {
    render() {
        return (
            <div className = "row">
                <div>{this.props.item.name}</div>
                <div>{this.props.item.surname}</div>
                <div>{this.props.item.age}</div>
                <div>{this.props.item.phone}</div>
            </div>
        )
    }
}

