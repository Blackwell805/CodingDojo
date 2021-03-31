import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import PetForm from '../components/PetForm'

const EditPet = (props) => {
    const [errors, setErrors] = useState([])
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        skill1: '',
        skill2: '',
        skill3: '',
        likes: 0
    })

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, pet) //This is the request.body. The "payload" that's being sent off.
        .then(res=>{
            if(res.data.message === 'error'){
                setErrors(res.data.errors)
            }else {
                navigate('/')
            }
        })
        .catch(err=>console.log('Something went wrong with the Adding a Pet!', err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => setPet(res.data.results))
    }, [props.id])//The useEffect function depends on the value inside the brackets. If this value inside the square bracket changes, the function will refire again. 

    return (
        <div>
            <h2>Update animal profile</h2>
            <PetForm
            pet={pet} setPet={setPet} 
            errors={errors} setErrors={setErrors}
            onSubmitHandler={onSubmitHandler}
            />
        </div>
    )
}

export default EditPet
