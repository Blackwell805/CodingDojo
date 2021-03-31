import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const PetDetails = (props) => {
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skill1: '',
        skill2: '',
        skill3: '',
        likes: 0
    })
    // const [liked, setLiked] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res=>{
            console.log(res.data.results) //if you get confused on how the dot walking works, delete one and see what happens.
            setPet(res.data.results)
        })
        .catch(err=>console.log(err));
    }, [props.id])

    // const like = () => {
    //     axios.put(`http://localhost:8000/api/pets/${props.id}`)
    //     .then(res=> {
    //         if(res.data.message === 'error'){
    //             alert("Something went wrong with the Like, try again please!");
    //         }
    //         else {
    //             setPet(res.data.results)
    //             setLiked(true)
    //         }
    //     })
    //     .catch(errors=>console.log(errors));
    // }

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${pet._id}`)
        .then(res => {
            if(res.data.message === 'error'){
                alert("Did not delete!");
            }
            else if(res.data.results.deletedCount === 0){
                alert("That's already been deleted. Refresh!");
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err));
    }



    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>Back to Home</Link>

            <h4>Details about:{pet.name}</h4> 
            <p>Pet Type: {pet.type}</p>
            <p>Description: {pet.description}</p>

            <p>Skill 1:{pet.skill1}</p>
            <p>Skill 2:{pet.skill2}</p>
            <p>Skill 3:{pet.skill3}</p>
            {/* 
                // skills? //if skills has a value, THEN do this....
                // skills.map((skill, i) => {

                //     return (
                //         <p key={i}>{skill}</p>
                //     )
                // })
                // : // otherwise
                // '' //display this
            */ }
            <h4>Want to adopt?</h4>
            <input type='submit' onClick={(e)=>deletePet(e.target.value)} />
        </div>
    )
}

export default PetDetails
