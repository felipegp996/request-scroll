'use client'

import Card from '@/components/Card'
import TextInput from '@/components/TextInput'
import axios from 'axios'
import { useState, useEffect } from 'react'

const fetchPokemonData = async (length: number) => {
  const promiseArr = [];
  for (let i = length; i < length + 20; i++) {
    promiseArr.push(
      (await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
    );
  }
  const resolvedData = await Promise.all(promiseArr);
  return resolvedData.map((item) => {
    return {
      name: item.data.name,
      sprite: item.data.sprites.front_default
    };
  });
};

export default function CardList() {
  const [data, setData] = useState<any[]>([]);
  const [listSize, setListSize] = useState<number>(0)
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [filteredPokemon, setFilteredPokemon] = useState(data)

  const fetchPokemonListSize = async () => {
    const results = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    setListSize(results.data.count)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMessage("Carregando...");
      const resp = await fetchPokemonData(1);
      setData(resp);
      setLoading(false);
    };
    fetchData();
    fetchPokemonListSize()
  }, [])

  window.onscroll = () => {
    if(data.length === listSize) {
      setMessage("Fim da lista")
      return
    }
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setMessage("Loading...")
      setLoading(true)
      fetchPokemonData(data.length).then((newPokemons) => {
        setData([...data, ...newPokemons]);
        setLoading(false);
      });
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center mt-7'>
        <TextInput />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-10">
        {data.map((pokemon, key) => (
          <Card key={key} name={pokemon.name} img={pokemon.sprite} />))
        }
        </div>
        {isLoading && <h1 className='w-full pt-10 flex text-black justify-center items-center'>{message}</h1>}
    </div>
  )
}