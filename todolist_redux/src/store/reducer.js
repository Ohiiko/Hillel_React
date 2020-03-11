import { ACTION_DELETE, ACTION_TOGGLE_TODO, ACTION_OPEN_MODAL, ACTION_SAVE_TODO, ACTION_TITLE_CHANGE, ACTION_CLOSE_MODAL} from "./actions";


const initialState = {
    todos: [
        {
            id: 1,
            title: "By feed the dog",
            isDone: false
          },
          {
            id: 2,
            title: "Do homework",
            isDone: false
          },
          {
            id: 3,
            title: "Buy train tickets",
            isDone: false
          },
          {
            id: 4,
            title: "Walk the dog",
            isDone: false
          }
    ],
    modalVisible: false,
    
}

function getEmptyItem() {
    return { title: 'Todo', isDone: false };
}


function createTodo(todos, todo){
    todo.id = Date.now();
    return [...todos, todo]
}

function updateTodo(todos, todo){
    console.log(todo)
    return todos.map(item => (item.id === todo.id ? todo : item));
} 


export default function(state = initialState, {type, payload}){
    switch (type){
        case ACTION_DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== payload),
            };
        case ACTION_TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload
                    ? { ...todo, isDone: !todo.isDone }
                    : todo)
            }
        case ACTION_OPEN_MODAL:
            console.log('open modal', payload)
            return {
                ...state, 
                modalVisible: payload
                ? state.todos.find(item => item.id === payload)
                : getEmptyItem()
            }
        case ACTION_TITLE_CHANGE:
            return {
                ...state,
                modalVisible:{...state.modalVisible, ...payload}
            }
        case ACTION_SAVE_TODO:
            return {
                ...state,
                todos: payload.id
                ? updateTodo(state.todos, payload)
                : createTodo(state.todos, payload),
                modalVisible: false
            }
        case ACTION_CLOSE_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        default:
            return state;
    }
}