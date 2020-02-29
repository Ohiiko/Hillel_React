import React from 'react'

function TodoListItems({todo, onDelete, onSelect, onToggle}) {
    return (
        <li style={todo.isDone ? {...itemStyle, backgroundColor: 'lightgreen', textDecoration: 'line-through'} : itemStyle }
         onClick={()=> onToggle(todo.id)}>
            {todo.title}
             <span style={{...btnStyle, color: 'red'}} onClick ={(e)=> onDelete(e, todo.id)}>✘</span>
             <span style={{...btnStyle, color: 'blue'}} onClick={(e) =>onSelect(e, todo.id)}>✐</span>
        </li>
    )
}

export default TodoListItems

const itemStyle ={
    color: '#555',
    border: '1px solid #bbb',
    cursor: 'pointer',
    padding: '7px',
    margin: '20px',
    fontSize: '16px',
    backgroundColor: '#ffd',
}

const btnStyle = {
    float: 'right'
}