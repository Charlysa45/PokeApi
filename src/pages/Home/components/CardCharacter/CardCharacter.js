import React from 'react'

import './CardCharacter.css'

const CardCharacter = (props) => {
    const {name, avatar} = props
  return (
    <article className='pokeCard'>
        <div className="pokeCard-sprite">
            <img src={avatar} alt="Poke-img" className='pokeCard-sprite-img'/>
        </div>
        <div className="pokeCard-info">
            <div className="pokeCard-info-nPokedex">

            </div>
            <div className="pokeCard-info-name">
                <p className='pokeCard-name'>{name}</p>
            </div>
            <div className="pokeCard-info-types">

            </div>
        </div>
    </article>
  )
}

export default CardCharacter