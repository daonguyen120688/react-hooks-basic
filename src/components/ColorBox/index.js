import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function ColorBox() {
    const [color, setColor] = useState('deeppink')

    function handleBoxClick() {
        const newColor = randomizeColor()
        setColor(newColor);
    }

    function randomizeColor() {
        const ColorList = ['deeppink', 'green', 'blue', 'yellow', 'red'];
        const randomIndex = Math.trunc(Math.random() * ColorList.length)
        return ColorList[randomIndex]
    }

    return (
        <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick} >
            COLOR BOX
        </div>
    );
}

export default ColorBox;