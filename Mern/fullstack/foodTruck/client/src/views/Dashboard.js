import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TruckCard from '../components/TruckCard';

const Dashboard = () => {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/trucks')
            .then(response => {
                setTrucks(response.data.results)
                console.log(response)
            })
            .catch(err => console.log("Something went wrong: ", err));
    }, [])

    return (
        <div className="col-sm-12">
            {
                trucks.map((item, i) => //trucks here is now capable of being passed through as props into TruckCard component. Each item has trucks state now.
                    <TruckCard truck={item} key={i}/>
                )
            }
        </div>
    )
}

export default Dashboard
