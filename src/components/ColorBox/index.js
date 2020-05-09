import React, { useState } from 'react';
import './ColorBox.scss'

function ColorBox() {
    const [color, setColor] = useState(() => {
        const firstColor = localStorage.getItem('color-box') || 'deeppink'
        return firstColor
    })

    function handleBoxClick() {
        const newColor = randomizeColor()
        localStorage.setItem('color-box', newColor)
        setColor(newColor);
    }

    function randomizeColor() {
        const ColorList = ['deeppink', 'green', 'blue', 'yellow', 'red'];
        const randomIndex = Math.trunc(Math.random() * ColorList.length)
        return ColorList[randomIndex]
    }

    return (
        <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick} >
        </div>
    );
}

export default ColorBox;