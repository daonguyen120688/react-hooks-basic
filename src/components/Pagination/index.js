import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Pagination.defaultProps = {
    onPageChange: null
}

function Pagination(props) {
    const { pagination, onPageChange } = props
    const totalPages = Math.ceil(pagination._totalRows / pagination._limit)

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <button disabled={pagination._page === 1} onClick={() => { handlePageChange(pagination._page - 1) }}>Prev</button>
            <button disabled={pagination._page >= totalPages} onClick={() => { handlePageChange(pagination._page + 1) }}>Next</button>
        </div>
    );
}

export default Pagination;