import React from 'react'
import { Link } from '@reach/router';


const PetForm = (props) => {
    const { pet, setPet, onSubmitHandler, errors} = props;

const changeHandler = e => {
    setPet({...pet, [e.target.name]: e.target.value})
    //... means make a copy of what's in "pet" and then we are adding what ever is in the text field in the e.target sections
}

    return (
        <div>
            <Link to={'/'}>Back to Home</Link>
            <div>
                <form onSubmit={onSubmitHandler}>
                    {
                        errors.name? //this is associated with the models.
                        <p>{errors.name.message}</p>
                        :
                        ''
                    }
                    <p>
                        <label>Pet Name:</label>
                        <input type='text' onChange={changeHandler} name='name' value={pet.name}/>
                    </p>
                    {
                        errors.type? //this is associated with the models.
                        <p>{errors.type.message}</p>
                        :
                        ''
                    }
                    <p>
                        <label>Pet Type:</label>
                        <input type='text' onChange={changeHandler} name='type' value={pet.type}/>
                    </p>
                    {
                        errors.description? //this is associated with the models.
                        <p>{errors.description.message}</p>
                        :
                        ''
                    }
                    <p>
                        <label>Pet Description:</label>
                        <input type='text' onChange={changeHandler} name='description' value={pet.description}/>
                    </p>
                    <p>
                        <h3>Skills (optional):</h3>
                        <div style={{display: 'flex', margin: 'auto'}}>
                            <label>Skill 1</label>
                            <input type='text' onChange={changeHandler} name='skill1' value={pet.skill1}/>
                            <label>Skill 2</label>
                            <input type='text' onChange={changeHandler} name='skill2' value={pet.skill2}/>
                            <label>Skill 3</label>
                            <input type='text' onChange={changeHandler} name='skill3' value={pet.skill3}/>
                        </div>
                    </p>
                    <input type='submit' value='addPet'/>
                </form>
            </div>

            </div>
    )
}

export default PetForm
