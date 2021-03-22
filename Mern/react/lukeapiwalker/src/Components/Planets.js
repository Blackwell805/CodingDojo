import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

const Planets = (props) => {
    const {id} = props;
    const [responseData, setResponseData] = useState();
    const [isLoaded, setIsLoaded] = useState();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(response=>{
                setResponseData(response.data)
                setIsLoaded(true)
            })
            .catch((err) => console.log(err))
    }, []); 


    return (
        <div>
            {
                isLoaded?
        <div>
            <h3>{responseData.name}</h3>
            <p>Climate: {responseData.climate}</p>
            <p>Terrain: {responseData.terrain}</p>
            <p>Surface Water: {responseData.surface_water}</p>
            <p>Population: {responseData.population}</p>
        </div>
        :
        <p>...loadingPlanet</p>
        }
        </div>
    )
}

export default Planets
