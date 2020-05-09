import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func
};

PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeOutRef = useRef(null)

    function handleSearchTermChange(e) {
        const newValue = e.target.value
        setSearchTerm(newValue)
        if (!onSubmit) return

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        }
        typingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: newValue
            }

            onSubmit(formValue)
        }, 500);
    }

    return (
        <div>
            <form>
                <input name='search-term' value={searchTerm} onChange={handleSearchTermChange} />
            </form>
        </div>
    );
}

export default PostFilterForm;