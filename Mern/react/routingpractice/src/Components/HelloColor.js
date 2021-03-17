import React from 'react'


const HelloColor = (props) => {
    const { word, color1, color2 } = props;

    return (
        <div style={{backgroundColor: color1, color: color2}}>
            The word is: { word }
        </div>
    )
}

export default HelloColor
