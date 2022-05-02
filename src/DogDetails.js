import React from "react";
import { useParams } from "react-router-dom";
import './DogDetails.css';

// import { Route } from "react-router-dom";

const DogDetails = ({dog}) => {
    const { name } = useParams();
    const result = dog.filter(d => d.name === name)
    
    

    return (
        <>
        <h1>Dog Details</h1>
        <h3>{name}</h3>
        <ul>
            <li>Age: {result[0].age}</li>
            <li>Facts: </li>
                <ul>
                {(result[0].facts).map(f => (<li>{f}</li>))}
                </ul>
        </ul>
        <img src={require(`./${name.toLowerCase()}.jpg`)} alt={name} />
        </>
    )
}

export default DogDetails;