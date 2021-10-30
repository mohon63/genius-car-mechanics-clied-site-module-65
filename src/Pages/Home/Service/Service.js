import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const { service } = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="px-1">
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p>{description}</p>
                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-warning my-4">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;