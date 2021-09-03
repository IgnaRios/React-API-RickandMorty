import { useState } from "react";


const Header = ({handlerSearch}) => {

    const [character, setCharacter] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerSearch(character)
    }

    const handlerInput = (e) =>{
        setCharacter(e.target.value);    
    }

    return (
    <div className='form-container'>
        <h1>Rick and Morty</h1>
        <form className='form' onSubmit={handlerSubmit}>
            <input onChange={handlerInput}className='input-form' type='text' placeholder='Buscar por nombre'>

            </input>
            <button className='btn-form' type='submit'>
                Search
            </button>
        </form>
    </div>
    );
}
 
export default Header;