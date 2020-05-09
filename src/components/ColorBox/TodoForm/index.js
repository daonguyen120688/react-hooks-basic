import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
}

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props
    const [inputvalue, setValueInput] = useState('');

    function handleValueChange(e) {
        setValueInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!onSubmit) return
        const formValues = {
            title: inputvalue
        }
        onSubmit(formValues)
        setValueInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputvalue} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;