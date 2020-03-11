import React from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import Modal from './components/Modal';
import {openModal} from './store/actions'


function App({modalVisible, openModal}) {
    
    return (
        <div className="App">
            {(modalVisible && <Modal/>)}
            <div style={wrappestyle}>
                <div>Todo List
                    <button style={addBtnStyle} onClick={()=> openModal()} >Add Todo</button>
                </div>
                <TodoList/>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        modalVisible: !!state.modalVisible
    }
}

const mapDispatchToProps = {
    openModal
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

const wrappestyle ={
    width: '700px',
     margin: '0 auto',
     padding: '20px',
     backgroundColor: '#A7A7A2',
     color: '#ffffff'
}

const addBtnStyle = {
    backgroundColor: 'lightblue',
    padding: '7px',
    borderRadius: '8px',
    marginLeft: '20px',
    color: '#272726',
    fontWeight: 'bold'
  }