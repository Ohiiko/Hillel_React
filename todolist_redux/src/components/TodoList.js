import React from 'react'
import TodoListItems from './TodoListItems'
import { connect } from 'react-redux';
import { todoDelete, openModal, toggleTodoItem } from '../store/actions';



function TodoList({todos, onDelete, onSelect, onToggle}) {
    return (
        <ul style ={listStyle}>
            {todos.map(todo =>
                 (<TodoListItems key={todo.id} todo={todo}
                    onDelete={onDelete} onSelect={onSelect} onToggle={onToggle} 
                   />))}
        </ul>
    );
}

function mapStateToProps(state){

    return {
        todos: state.todos
    }

}

const mapDispatchToProps = {
    onDelete: todoDelete,
    onSelect: openModal,
    onToggle: toggleTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)

const listStyle = {
    listStyle: 'none', 
    margin: '0',
    padding: '0',
    
  }


