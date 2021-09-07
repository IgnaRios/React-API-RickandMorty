import React from 'react';


const Character = ({id, name, status, species, image, origin, favorites, setFavorites}) => {
    

    const addFavorites = (e) =>{
        const favCharacter = {
            id: id,
            name: name,
            status: status,
            img: image
        }
        setFavorites([...favorites, favCharacter ])
    }

    return (  
        <div className='card'>
            <h2 className='card-name'>{name}</h2>            
            <img className='card-img' src={image} alt={name}></img> 
            <button onClick={addFavorites}>add to Favorites</button>
            <h4 className='card-h4 specie'>Especie: {species}</h4>
            <h4 className='card-h4 name'>Origen: {origin.name}</h4>
            <h4 className='card-h4 status'>Estado: {status}</h4>      
        </div>
    );
}
 
export default Character;