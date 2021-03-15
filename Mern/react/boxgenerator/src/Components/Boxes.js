import React, {useState} from 'react'

const Boxes = (props) => {
    return (
        <div>
            <ul>{props.allColors.map((color)=><li style={{width:'40px', height:'40px', backgroundColor: color}}></li>)}
                
            </ul>
        </div>
    )
}

export default Boxes
