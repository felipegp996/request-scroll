'use client'

interface Pokemon {
    name: string;
    img: string;
    types: [string];
}

export default function Card(props: Pokemon) {
    return (
        <div className="p-10 rounded-lg bg-white shadow-lg">
            <div className="max-w-sm rounded">
                <img className="w-full object-cover overflow-hidden flex justify-center items-center" src={props.img} alt={`sprite do pokemon ${props.name}`} />
                <h1 className="font-bold text-xl mb-2 text-black">{props.name}</h1>
                <h2 className="text-gray-700 text-base">{props.types}</h2>
            </div>
        </div>
    )
}