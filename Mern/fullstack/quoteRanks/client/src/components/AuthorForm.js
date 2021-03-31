import React from 'react'
import { navigate, Link } from '@reach/router';


const AuthorForm = (props) => {
    const {author, setAuthor, onSubmitHandler} = props;
    return (
        <div>
            <h1>Quote Ranks</h1>
            <p><Link to={'/'}>Home</Link></p>
            <form onSubmit={onSubmitHandler}>
                <h3>Add a new quotable author:</h3>
                <label>Name: </label>
                <input type="text" onChange={setAuthor} value={author}/>
                <br></br>
                <button type='submit'><label >Submit</label></button>
                <button onClick={e=>navigate('/')}><label >Cancel</label></button>
            </form>
        </div>
    )
}

export default AuthorForm
