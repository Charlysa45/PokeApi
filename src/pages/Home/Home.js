import React from 'react'
import { useContext } from 'react'
import ApiContext from '../../context/ApiContext';
import CardCharacter from './components/CardCharacter/CardCharacter';

import './Home.css'

const Home = () => {
    const {pokeList} = useContext(ApiContext);

  return (
    <section id='pokeCards'>
        {pokeList.map((pokemon) => {
            return <CardCharacter key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>
        })}
    </section> 
  )
}

export default Home