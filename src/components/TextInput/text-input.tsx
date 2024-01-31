export default function TextInput() {
    return (
        <div className="w-screen flex flex-col items-center justify-center">
            {/* <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">Procure por um tipo</label> */}
            <input name="input" id="input" className="w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Digite o nome de um Pokémon"></input>
            <div className="border border-gray-700 w-full mt-10" />
        </div>
    )
}