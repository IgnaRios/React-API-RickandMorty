import  React, {useState, useEffect} from 'react';
import Character from "./Character";
import Loading from '../constants/loadin';
import { enviroment } from '../constants';
import { useFetch } from '../CustomHooks/useFetch';
import Pagination from './../constants/Paginate'

const Characters = ({search}) => {
    const [ page, setPage ] = useState(enviroment.CHARACTER_ENDPOINT);

    useEffect(()=>{
        const newPage = !search ? enviroment.CHARACTER_ENDPOINT : `${enviroment.CHARACTER_ENDPOINT}?name=${search}`;
        setPage(newPage);
    },[search])

    const [ data, fetching ] = useFetch(page);
    const { info, results: characters} = data;
    
    const handlerPage = (newPage) => {
        setPage(`${enviroment.CHARACTER_ENDPOINT}?${newPage}`);
    };

    return (
        <>
        <div className='container'>
        { fetching ? (
            <Loading/>
        )
        : characters.map((character) =>(
            <Character key={character.id} {...character} />))
        }
        </div>
        <Pagination {...info} handlerPage={handlerPage} />
        </>
    );
}
 
export default Characters;