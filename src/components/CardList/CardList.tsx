'use client'

import Card from '@/components/Card'
import axios from 'axios'
import PokemonCard from '@/interfaces'
import { useState, useEffect } from 'react'

interface Pokemons {
    name: string,
    url: string
}

export default function CardList() {
    const [pokemons, setPokemons] = useState<any[]>([])

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30")

    const getPokemons = () => {
        const requests = []

        for(let i = 1; i < 30; i++ ) {
            requests.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        const results =  axios.all(requests.map((request) => axios.get(request))).then((res) => setPokemons(res))
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className="flex justify-center items-center space-x-2 space-y-2">
            {
                pokemons.map((pokemon, key) => (
                    <Card key={key} name={pokemon.data.name} img={pokemon.data.sprites.front_default} types={pokemon.data.types[0].type.name}/>
                ))
            }
        </div>
    )
}