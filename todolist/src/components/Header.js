import React from 'react'


function Header({onClick}) {
    return (
        <div>Todo List
            <button style={addBtnStyle} onClick = {onClick}>Add Todo</button>
        </div>
    )
}

export default Header

const addBtnStyle = {
    backgroundColor: 'lightblue',
    padding: '7px',
    borderRadius: '8px',
    marginLeft: '20px',
    color: '#272726',
    fontWeight: 'bold'
  }
