import React from 'react'

const Word = (props) => {
    const { word } = props
    return (
        <div>
            The word is: { word }
        </div>
    )
}

export default Word
