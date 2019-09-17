const initialState = [
    {
        id: Math.random(),
        text: 'learn redux',
        completed: false
    },
    {
        id: Math.random(),
        text: 'learn react',
        completed: false
    },
    {
        id: Math.random(),
        text: 'learn react native',
        completed: false
    },
    {
        id: Math.random(),
        text: 'learn something else',
        completed: false
    }
];

export const actions = {
    add (text) {
        return {
            type: 'ADD',
            todo: {
                id: Math.random(),
                text,
                completed: false
            }
        }
    },
    remove (id) {
        return {
            type: 'REMOVE',
            id
        }
    },
    toggle (id) {
        return {
            type: 'TOGGLE',
            id
        }
    }
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.todo];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
}

export default todoReducer;