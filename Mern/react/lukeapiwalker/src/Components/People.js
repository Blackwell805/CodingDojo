import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';


const People = (props) => {
    const {id} = props;
    const [responseData, setResponseData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
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
            <h3> {responseData.name}</h3>
            <p>Height: {responseData.height}</p>
            <p>Mass: {responseData.mass}</p>
            <p>hair color: {responseData.hair_color}</p>
            <p>skin color: {responseData.skin_color}</p>
        </div>
        :
        <p>...loadingPerson</p>
        }
        </div>
    )
}

export default People

// {
//     isLoaded?
//     <div>
//         <h3> {responseData.name}</h3>
//         <p>Height: {responseData.height}</p>
//         <p>Mass: {responseData.mass}</p>
//         <p>hair color: {responseData.hair_color}</p>
//         <p>skin color: {responseData.skin_color}</p>
//     </div>
//     :
//     <p>...loadingPerson</p>
//     }