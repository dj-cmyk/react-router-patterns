import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
    const dogList = dogs.map((d) => (<h3><Link exact to={`/dogs/${d.name}`}>{d.name}</Link></h3>))
    return (
        <>
        <h1>Dog List</h1>
        {dogList}
        </>
    )
}

export default DogList;