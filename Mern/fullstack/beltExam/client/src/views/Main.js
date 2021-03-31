import React, { useState, useEffect} from 'react'
import { Link } from '@reach/router';
import axios from "axios";


const Main = () => {
    const [pets, setPets] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            setPets(res.data.results)
            setLoaded(true);
        })
        .catch(errors=>console.log(errors));
    }, [])

    if(!loaded){
        return (
            <p>Loading....</p>
        )
    }


    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            <Link to={'/pets/new'}>add a pet to the shelter</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((animal, i) => {
                            return (
                                <tr key={i}>
                                    <td>{animal.name}</td>
                                    <td>{animal.type}</td>
                                    <td><Link to={`/pets/${animal._id}`}>Details</Link></td>
                                    <td><Link to={`/pets/${animal._id}/edit`}>Edit</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main
