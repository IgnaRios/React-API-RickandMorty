import React, { useState } from "react";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import Favorites from './Components/Aside'
import './App.css';


function App() {

  const [search, setSearch] = useState('');

  const handlerSearch = (name) => {
    setSearch(name);
  }

  return (
    <>
    <Header handlerSearch={handlerSearch}/>
    <div className='main'>
      <div className='mainCharacter'>
        <Characters search={search}/>
      </div>
      <Favorites />
    </div>
    </>
  );
}

export default App;
