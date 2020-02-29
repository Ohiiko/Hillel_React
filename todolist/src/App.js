import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import api from './services/api';





function App() {
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const [newTodo, setNewTodo] = useState({title:'', isDone: false});

    useEffect(() => {
        api.get('').then(resp => setTodos(resp.data))
    }, [])

    function onTodoDelete(e, id){
        e.stopPropagation();
        api.delete(id).then(resp => {setTodos(todos.filter(todo => todo.id !== resp.data.id))})
    }

    function onTodoTitleChange(changes){
        setNewTodo({...newTodo, ...changes});
    }

    function onBtnAddClick (){      
        setModal(!modal);
        setNewTodo({title:'', isDone: false});
    }

    function onCancelBtnClick(){
        setModal(false);
        setNewTodo({title:'', isDone: false});
    }

    function onSaveBtnClick(todo){
        if(todo.id){
            updateTodo(todo);
        }else {
            createTodo(todo);
        }
        setNewTodo({title:'', isDone: false});
    }
    
    function createTodo(todo){
        api.post('', todo).then(resp => setTodos([...todos, resp.data]));
        setModal(false);
    }

    function updateTodo(todo){
        api.put(todo.id, todo).then(resp =>{
            setTodos(todos.map(item => (item.id === resp.data.id ? todo : item)));
        })
        setModal(false);
    }

    function onTodoSelect(e, id){
        e.stopPropagation();
        const todo = todos.find(item => item.id === id);
        setNewTodo(todo);
        setModal(true);
    }

    function onToggleTodoItem(id){
        setTodos(todos.map(item=>{
            if (item.id === id){
                item.isDone = !item.isDone
            }
            return item;
        }))
    }

    return (
        <div className="App">
                {(modal && <Modal onChange={onTodoTitleChange} 
                onCancel={onCancelBtnClick}  onSave={onSaveBtnClick} todo={newTodo}/>)}
            <div style={wrappestyle}>
                <Header onClick = {onBtnAddClick}/>
                <TodoList todos={todos} 
                onDelete={onTodoDelete} onSelect={onTodoSelect} onToggle={onToggleTodoItem} />
            </div>
        </div>
    );
}

export default App;

const wrappestyle ={
    width: '700px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#A7A7A2',
    color: '#ffffff',
}