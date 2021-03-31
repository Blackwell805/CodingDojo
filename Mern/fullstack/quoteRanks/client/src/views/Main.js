import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';



export default () => {
    const [author, setAuthor] = useState([])
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(response => {
                setAuthor(response.data)
                // setLoaded(true)
            })
    }, []);

    // if(!loaded){
    //     return (
    //         <p>Loading....</p>
    //     )
    // }

    return (
        <div>
            <h1>Quote Ranks</h1>
            <p><Link to={'/new'}>Add a quotable author</Link></p>
            <div>
                <table>
                    <tr>
                        <th>Author</th>
                        <th colSpan={3}>Actions Available</th>
                    </tr>
                    {
                        author.map((person, i) => (
                            <tr key={i}>
                                <td>{person.name}</td>
                                <td><Link to={`/quotes/${person._id}`}>View Quotes</Link></td>
                                <td><Link to={`/quotes/edit/${person._id}`}>Edit</Link></td>
                                <td><Link to={`quotes/delete/${person._id}`}>Delete</Link></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

