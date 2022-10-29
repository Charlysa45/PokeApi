import { useRef, useState, createContext, useEffect } from 'react'
import { getPokeData, getPokeInfo } from '../services/ApiServices';

const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [pokeList, setPokeList] = useState([])
    const ranEffect = useRef(false);
 
  useEffect(() => {
    if (ranEffect.current === false) {
        getPokeData().then((res) => {
            res.results.forEach((el) => {
                getPokeInfo(el.url).then((data) => {
                    console.info(data)
                    let pokemon = {
                        id: data.id,
                        name: data.name,
                        avatar: data.sprites.front_default
                    }
    
                    setPokeList((pokeList) => [...pokeList, pokemon])
                })
            })
        })
    }

    return () => ranEffect.current = true 
     }, [])

     const data = {pokeList}
     return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export {ApiProvider}
export default ApiContext