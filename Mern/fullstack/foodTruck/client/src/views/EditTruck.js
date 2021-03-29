import axios from 'axios';
import { navigate} from '@reach/router';
import React, {useEffect, useState} from 'react';
import TruckForm from '../components/TruckForm';
import DeleteButton from '../components/DeleteButton';

const EditTruck = (props) => {
    const {id} = props;
    const [loading, setLoading] = useState(true);
    const [truck, setTruck] = useState({
        name: '',
        type: '',
        description: ''
    });
    const [errors, setErrors] = useState({
        name: null,
        type: null, 
        description: null
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trucks/${id}`)
        .then(response=>{
            setTruck(response.data.results);
                setLoading(false);
            })
            .catch(err => navigate('/'));
    }, [])

    const changeHandler = e => {
        setTruck({
            ...truck,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/trucks/${id}`, truck)
            .then(response => {
                if(response.data.message === "success"){
                    navigate(`/truck/${id}`);
                } else {
                    setErrors(response.data.errors);
                }
            })
    }

    return (
        <div>
            <h4>Edit Food Truck</h4>
            {
                loading ?
                ' '
                :
                <TruckForm
                truck={truck}
                inputHandler={changeHandler}
                submitHandler={submitHandler}
                errors={errors}
                DeleteBtn={<DeleteButton id={id}/>}
            />
            }
            
        </div>
    )
}

export default EditTruck
