'use client'
import Card from '@/components/Card'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

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
  const [pokemons, setPokemon] = useState<any[]>([]);
  const [listSize, setListSize] = useState<number>(0)
  const [inputText, setInputText] = useState('')
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const timeoutRef = useRef<any>(null)


  const fetchPokemonListSize = async () => {
    const results = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    setListSize(results.data.count)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMessage("Carregando...");
      const res = await fetchPokemonData(1);
      setPokemon(res);
      setLoading(false);
    };
    fetchData();
    fetchPokemonListSize()
  }, [])

  window.onscroll = () => {
    if(pokemons.length === listSize) {
      setMessage("Fim da lista")
      return
    }
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setMessage("Loading...")
      setLoading(true)
      fetchPokemonData(pokemons.length).then((newPokemons) => {
        setPokemon([...pokemons, ...newPokemons]);
        setLoading(false);
      });
    }
  }

  const handleSearch = (event: any) => {
    const value = event.target.value
    setInputText(value)

    if(value.length > 1) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(async () => {
        const res = await fetchPokemonData(value)
        setPokemon(res)
      },1500)
    } else {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(async () => {
        const res = await fetchPokemonData(1)
        setPokemon(res)
      },1500)
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-7'>
      <div className="w-screen flex flex-col items-center justify-center">
        <input 
          name="input"  
          id="input"
          value={inputText}
          className="w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          type="text"
          onChange={handleSearch}
          placeholder="Digite o nome de um Pokémon">
        </input>
        <div className="border border-gray-700 w-full mt-10" />
      </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-10">
        {pokemons.map((pokemon, key) => (
          <Card key={key} name={pokemon.name} img={pokemon.sprite} />))
        }
        </div>
        {isLoading && <h1 className='w-full pt-10 flex text-black justify-center items-center'>{message}</h1>}
    </div>
  )
}