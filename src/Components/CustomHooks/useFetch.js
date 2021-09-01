import {useState, useEffect} from 'react';

import { enviroment } from '../constants';

export const useFetch =  (endpoint) =>{
    const [ data, setData ] = useState({});
    const [fetching, setFetching] =useState(true);
    const [error, setError] = useState(false); 
    
    const getCharacters = async () => {
        try{
        const result = await fetch(`${enviroment.BASE_URL}/${endpoint}`)
        const data = await result.json();
        setData(data);
        setFetching(false);
        }
        catch(e){
            setError(true);
            setFetching(false);
            setData({});
        }
    }

    useEffect(()=>{
       getCharacters(); 
    },[endpoint])

    return [data, fetching, error];

};
