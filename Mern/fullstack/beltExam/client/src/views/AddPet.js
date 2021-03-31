import React, { useState} from 'react'
import PetForm from '../components/PetForm';
import axios from 'axios';
import {navigate} from '@reach/router'

const AddPet = () => {
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


    
    const onSubmitHandler = e => { //With every key stroke, State is being updated instantaneously. Once submitted, that's what's telling the developer that you are done typing input.
        e.preventDefault(); //if you don't put this in, the info you input won't be delivered properly.
        axios.post('http://localhost:8000/api/pets/new', pet)
        .then(res=>{
            if(res.data.message === 'error'){
                console.log(res.data.errors)
                setErrors(res.data.errors)
            }else {
                navigate('/')
            }
        })
        .catch(err=>console.log('Something went wrong with the Adding a Pet!', err))
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h4>Know a pet needing a home?</h4>
            <PetForm pet={pet} setPet={setPet}  onSubmitHandler={onSubmitHandler} errors={errors} setErrors={setErrors} />
        </div>
    )
}

export default AddPet
