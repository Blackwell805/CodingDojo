import React, { useState } from 'react';
// import styled from 'styled-components';

const BoxForm = (props) => {
    
    const [color, setColor] = useState('');

    const newBox = (e) => {
        e.preventDefault();
        // const create = {, color};
        // setColor('Green')
        props.setAllColors([...props.allColors, color]) //...allColors is bringing out all the colors in the list, while the color is being added. 
        setColor('')
        console.log("New Box Created!")1
    }
    
    return (
        <div>
            <form onSubmit={newBox}>
                <label>Color: </label>
                <input type="text" name='color' value={color} onChange={e => setColor(e.target.value)}/>
                <input type="submit" value='Add Color'/>
            </form>
        </div>
    )
}

export default BoxForm


// const StyledBox = styled.div`
//     border: 1px solid lightgray;
//     background: ${props => props.bgColor};
//     width: ${props => props.width || '100px'};
//     height: ${props => props.height || '100px'};
// `;

// export default StyledBox;