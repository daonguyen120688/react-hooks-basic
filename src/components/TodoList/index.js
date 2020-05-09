import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onClickItem: PropTypes.func
}

TodoList.defaultProps = {
    todos: [],
    onClickItem: null
}

function TodoList(props) {
    const { todos, onClickItem } = props

    function handleClickItem(todo) {
        if (onClickItem) {
            onClickItem(todo)
        }
    }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClickItem(todo)}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;