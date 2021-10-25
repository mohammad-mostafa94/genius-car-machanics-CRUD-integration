import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});

    const {name, description, img, price} = service;

    const { serviceId } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setService(data);
        })
    },[]);
    return (
        <div>
            <h2>this is booking ID: {serviceId}</h2>
            <h1>Name : {name}</h1>
        </div>
    );
};

export default Booking;