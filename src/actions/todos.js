import * as types from '../constants/ActionTypes';

/*
 * action creators
 */

let nextTodoId = 0;

export function addTodo(text) {
    return { type: types.ADD_TODO, id: nextTodoId++, text };
}

export function completeTodo(id) {
    return { type: types.COMPLETE_TODO, id };
}

export function setVisibilityFilter(filter) {
    return { type: types.SET_VISIBILITY_FILTER, filter };
}
