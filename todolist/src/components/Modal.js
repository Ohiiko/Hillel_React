import React from 'react'

function Modal({onChange, onCancel, onSave, todo}) {

   function onValueChange(e){
       onChange({
           [e.target.name]:e.target.value
       });
   }

   function onModalSubmit(e){
       console.log('modal submit')
       e.preventDefault();
       
       onSave(todo);
   }



    return (
        <form style = {modalTodoContainerStyle}>
            <div style = {modalTodoStyle}> 
                <label>Title</label>
                <input type = 'text' name = 'title' value = {todo.title} onChange={onValueChange}></input>
                <div >
                    <button style={{...btnStyle, left: '48%'}} onClick={onModalSubmit}>Save</button>
                    <button style={{...btnStyle, backgroundColor: '#ff8c7a'}} onClick={onCancel}>Cancel</button>
                </div>
            </div>
            <div style = {modalTodoBkgStyle}>
            </div>
        </form>
    )
}

export default Modal

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