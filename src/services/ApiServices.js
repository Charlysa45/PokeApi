import axios from "axios"

let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokeData = async() => {
    const request = await axios.get(pokeUrl).then((res) => res.data)

    return request
}

export const getPokeInfo = async(pokeUrl) => {
    const request = await axios.get(pokeUrl).then((res) => res.data)

    return request
}