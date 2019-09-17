import { combineReducers } from 'redux';
import todos from './todo/todoReducer'

export default combineReducers({
    todos,
});