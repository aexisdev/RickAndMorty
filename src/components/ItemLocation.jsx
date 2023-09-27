import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
const ItemLocation = ({ url }) => {
    //* estado de la url con los personajes.
    const [characters, setCharacters] = useState({})
    //===========================================
    //===========================================
    //* url con la ubicacion de los personajes.
    useEffect(() => {
        axios.get(url)
            .then(res => setCharacters(res.data))
    }, [])
    console.log(characters)
    //==========================================
    //*longitud de episode.

    //===========================================
    //===========================================
    return (
        <div>
            {/* <h3>Este es el componente item location.</h3> */}
            <li className='item'>
                <br />
                {/* //*accdediendo a las imagenes de los personajes. */}
                <img src={characters.image} alt="" />
                
                {/* //* accediendo al nombre de los personajes. */}
                <br />
                {characters.name}
                {/* //*accediendo al tipo de la personajes. */}
                {characters.type}       
                {/* //*accediendo a la especie de los personajes. */}
                {characters.species}
                {/* //* accediendo al estatus del personaje. */}
                <h4>Status: {characters.status}</h4>
                {/* //*accediendo al genero. */}
                <h4>Gender: {characters.gender}</h4>
                {/* //*accediendo al origen del personaje. */}
            </li>
        </div>
    );
};

export default ItemLocation;