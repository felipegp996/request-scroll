export default function TextInput() {
    return (
        <div>
            <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">Pokémon</label>
            <input name="input" id="input" className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Digite algo"></input>   
        </div>
    )
}