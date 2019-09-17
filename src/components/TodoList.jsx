import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/todo/todoReducer';

const TodoList = () => {
  const todos = useSelector(
    state => (state.todos)
  )

  const dispatch = useDispatch()

  if (todos && Array.isArray(todos)) {
    return (
      <ul>
        {todos.map(todo => <li onClick={() => dispatch(actions.toggle(todo.id))} style={{textDecoration: todo.completed ? 'line-through' : 'none'}} key={todo.id}>{todo.text} <button onClick={() => dispatch(actions.remove(todo.id))}>remove</button></li>)}
      </ul>
    );
  }
} 

export default TodoList;
