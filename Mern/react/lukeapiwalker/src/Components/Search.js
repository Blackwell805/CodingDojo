import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const Search = (props) => {
    const {people, setPeople} = props;
    const {planet, setPlanet} = props;


    const getPeople = () => {
        axios.get("https://swapi.dev/api/people/:id")
            .then(response => setPeople(response.data.results))
            .catch(() => console.log('data did not come back'))
    }
    const getPlanet = () => {
        axios.get("https://swapi.dev/api/planet/:id")
            .then(response => setPlanet(response.data.results))
            .catch(() => console.log('data did not come back'))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id} `)

    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='category'>Select your category:</label>
                    <select onChange={e => setCategory(e.target.value)}>
                        <option>Select Category</option>
                        <option value="people">People</option>
                        <option value="planet">Planet</option>
                    </select>
                <label htmlFor="id">ID</label>
                <input type="number" name='id' value='id' onChange="store value in state"/>
                <button type='submit'>Search</button>
            </form>
            
        </div>
    )
}

export default Search
