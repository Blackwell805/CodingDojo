import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TruckCard from '../components/TruckCard';

const Dashboard = () => {
    const [trucks, setTrucks] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/trucks/')
    .then(response=> setTrucks(response.data.results))
    .catch(err=> console.log("error",err))
}, [])

    return (
        <div className="col-sm-12">
            {
                trucks.map((item,i) =>
                <TruckCard truck={item} key={i}/> 
                )
            }
            
        </div>
    )
}

export default Dashboard
