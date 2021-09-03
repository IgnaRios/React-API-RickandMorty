import React from 'react';


const Character = ({name, status, species, image, origin}) => {

    return (  
        <div className='card'>
            <h2 className='card-name'>{name}</h2>            
            <img className='card-img' src={image} alt={name}></img> 
            <form>
            <label for='fav'>favorito</label>
            <input id='fav' type='checkbox'></input>
            </form> 
            <h4 className='card-h4 specie'>Especie: {species}</h4>
            <h4 className='card-h4 name'>Origen: {origin.name}</h4>
            <h4 className='card-h4 status'>Estado: {status}</h4>      
        </div>
    );
}
 
export default Character;