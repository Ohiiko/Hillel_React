
export const ACTION_DELETE = 'ACTION_DELETE';
export function todoDelete(id){
    return {
        type: ACTION_DELETE,
        payload: id
    }
}

export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export function toggleTodoItem(id){
    return {
        type:ACTION_TOGGLE_TODO,
        payload:id
    }
}

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id){
    return {
        type: ACTION_OPEN_MODAL,
        payload: id
    }
}

export const ACTION_TITLE_CHANGE = 'ACTION_TITLE_CHANGE';
export function todoTitleChange(changes){
    return {
        type:ACTION_TITLE_CHANGE,
        payload: changes
    }
}

export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export function closeModal(){
    return{
        type: ACTION_CLOSE_MODAL
    }
}

export const ACTION_SAVE_TODO = 'ACTION_SAVE_TODO';
export function saveTodo(id){
    return {
        type: ACTION_SAVE_TODO,
        payload: id
    }
}


