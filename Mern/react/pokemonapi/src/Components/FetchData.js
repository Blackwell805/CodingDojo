import React, { useState } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [pokemon, setPokemon] = useState([]);


    const fetchData = () => {
        // fetch("https://pokeapi.co/api/v2/pokemon/")
        // .then(response => response.json()) //if using fetch, this is the extra step needed to make the api appear
        //then(response => console.log(response))

        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => setPokemon(response.data.results))
            .catch(() => console.log('data did not come back'))
    }


    return (
        <>
            <button onClick={ fetchData }>Click to fetch pokemon</button>
            <div>
                {
                    pokemon.map( (pokemon, i) =>
                    <p key={i}>{pokemon.name}</p>
                    )
                }
            </div>
        </>
    )
}

export default FetchData
