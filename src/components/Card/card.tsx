'use client'
import Types from '../../interfaces/index'

interface Pokemon {
    name: string;
    img: string;
}

export default function Card(props: Pokemon) {

    return (
        <div className="p-5 rounded-lg bg-white shadow-lg">
            <div className="max-w-sm rounded">
                <img className="w-full object-cover overflow-hidden flex justify-center items-center" src={props.img} alt={`sprite do pokemon ${props.name}`} />
                <h1 className="font-bold text-xl border-t-2 pt-2 text-black text-center">{props.name}</h1>
            </div>
        </div>
    )
}