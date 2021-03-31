import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import TruckForm from '../components/TruckForm'

const NewTruck = () => {
    const [truck, setTruck] = useState({
        name: "",
        style: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: null,
        style: null,
        description: null
    });

    const changeHandler = e => {
        setTruck({
            ...truck,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/trucks', truck)
            .then(response => {
                console.log(response.data)
                if(response.data.message === "error"){
                    setErrors(response.data.errors);
                } else {
                    navigate('/');
                }
            })
    }

    return (
        <div>
            <h4>New Food Truck</h4>
            <TruckForm
                truck={ truck }
                inputHandler={ changeHandler }
                submitHandler={ submitHandler }
                errors={ errors }
            />
        </div>
    )
}

export default NewTruck
