import { useState } from "react";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import './App.css';


function App() {

  const [search, setSearch] = useState('');

  const handlerSearch = (name) => {
    setSearch(name);
  }

  return (
    <>
    <Header handlerSearch={handlerSearch}/>
    <Characters search={search}/>
    </>
  );
}

export default App;
