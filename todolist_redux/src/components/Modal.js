import React from 'react'
import { connect } from 'react-redux';
import { closeModal, saveTodo, todoTitleChange } from '../store/actions';

function Modal({onChange, closeModal, saveTodo, todo}) {

   function onValueChange(e){
        const changes = {[e.target.name]:e.target.value}
        console.log(changes)
        onChange(changes);
   }

    return (
        <form style = {modalTodoContainerStyle}>
            <div style = {modalTodoStyle}> 
                <label>Title</label>
                <input type = 'text' name = 'title' value = {todo.title} onChange={onValueChange}></input>
                <div >
                    <button style={{...btnStyle, left: '48%'}} onClick={()=>saveTodo(todo)}>Save</button>
                    <button style={{...btnStyle, backgroundColor: '#ff8c7a'}} onClick={closeModal}>Cancel</button>
                </div>
            </div>
            <div style = {modalTodoBkgStyle}>
            </div>
        </form>
    )
}

function mapStateToProps(state){

    
    return {
        todo: state.modalVisible
    }
}

const mapDispatchToProps = {
    onChange: todoTitleChange,
    closeModal: closeModal, 
    saveTodo: saveTodo
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal)

const modalTodoBkgStyle ={
    opacity: '0.60',
    backgroundColor: '#A7A7A2',
    height: '100%',
    width: '100%',
  
}

const modalTodoContainerStyle = {
    position: 'fixed',
    height: '100%',
    width: '100%',
}

const modalTodoStyle ={
    color: '#ffffff',
    width: '200px',
    height: '80px',
    backgroundColor: '#272726',
    padding: '20px',
    opacity: '1',
    position: 'absolute',
    top: '30%',
    left: '40%',
    zIndex: '10000',
    borderRadius: '8px'
}

  const btnStyle = {
    width: '30%',
    backgroundColor: 'lightblue',
    padding: '7px',
    borderRadius: '8px',
    marginLeft: '20px',
    color: '#272726',
    fontWeight: 'bold',
    position: 'absolute',
    top:'60%',
    left: '5%'
}