import React from 'react'
import { actions } from '../redux/todo/todoReducer'
import { useDispatch } from 'react-redux'

const TodoForm = () => {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch();

    const clear = () => {
        setText('');
    }

    const addText = React.useCallback(
        e => {
            e.preventDefault();
            dispatch(actions.add(text));
            clear()
        }, [dispatch, text]
    )

    return (
        <div>
            <h1>Todo</h1>
            <form>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button onClick={addText}>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;
