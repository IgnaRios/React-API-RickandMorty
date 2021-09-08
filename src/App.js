import React, { useState } from "react";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import Favorites from './Components/Aside'
import './App.css';


function App() {
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('');

    const handlerSearch = (name) => {
      setSearch(name);
    }

    const handlerDelete = (id) => {
      const favCharacters = favorites.filter((character) => character.id !== id);
      setFavorites(favCharacters);
    }

    return (
      <>
      <Header handlerSearch={handlerSearch}/>
      <div className='main'>
        <div className='mainCharacter'>
          <Characters search={search} favorites={favorites} setFavorites={setFavorites}/>
        </div>
        <Favorites handlerDelete={handlerDelete} favorites={favorites}/>
      </div>
      </>
    );
}

export default App;
