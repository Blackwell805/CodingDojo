import React from 'react';
import Word from './Word';
import Number from './Number';

const NumberOrWord = (props) => {
    const { param } = props;
    return (
        <div>
        {
            isNaN(param)?
            <Word word={param} />
            :
            <Number number={param} />
        }
        </div>
    )
}

export default NumberOrWord
