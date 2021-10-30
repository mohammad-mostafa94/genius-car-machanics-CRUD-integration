import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {

    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        axios.post("https://calm-everglades-15369.herokuapp.com/service",data)
        .then(res=>{
            console.log(res.data);
            console.log(res.data.insertedId);
            if (res.data.insertedId) {
                alert("data added successfully");
                reset();
            }
        })
    };
    return (
        <div className="addServiceStyle">
            <h1>Add new service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}  placeholder="name"/>
                <textarea {...register("description")}  placeholder="description"/>
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")}  placeholder="image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;