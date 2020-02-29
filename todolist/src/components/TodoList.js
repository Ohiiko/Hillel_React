import React from 'react'
import TodoListItems from './TodoListItems'



function TodoList({todos, onDelete, onSelect, onToggle}) {
    return (
        <ul style ={listStyle}>
            {todos.map(todo =>
                 (<TodoListItems key={todo.id} todo={todo} onSelect={onSelect}
                  onDelete={onDelete} onToggle={onToggle} />))}
        </ul>
    );
}

export default TodoList

const listStyle = {
    listStyle: 'none', 
    margin: '0',
    padding: '0',
    
  }


