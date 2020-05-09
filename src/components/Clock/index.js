import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const timeString = formatDate(now)
            setTimeString(timeString)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

function formatDate(date) {
    const hour = `0${date.getHours()}`.slice(-2)
    const minute = `0${date.getMinutes()}`.slice(-2)
    const second = `0${date.getSeconds()}`.slice(-2)
    return `${hour}:${minute}:${second}`
}

export default Clock;