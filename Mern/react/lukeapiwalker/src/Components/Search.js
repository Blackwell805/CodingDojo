import { navigate } from '@reach/router';
import React, { useState } from 'react';




const Search = () => {
    const [category, setCategory] = useState('people');
    const [numberID, setNumberID] = useState();

    const limbo = e => {
        e.preventDefault();
        navigate(`/${category}/${numberID}`)
    } 



    return (
        <div>
            <form onSubmit={limbo}>
                <label htmlFor="selectOption">Search for:</label>
                <select name="selectOption" onChange={e => setCategory(e.target.value)} >
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <label htmlFor="idLabel">ID:</label>
                <input type="number" name="idLabel" onChange={e => setNumberID(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search


