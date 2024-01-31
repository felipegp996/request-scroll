'use client'
import Types from '../../interfaces/index'

interface Pokemon {
    name: string;
    img: string;
}

export default function Card(props: Pokemon) {

    const typeHandler = (types: Types[]) => {
        if(types[1]) {
            return types[0].type.name + " " + types[1].type.name
        }
        return types[0]
    }

    return (
        <div className="p-5 rounded-lg bg-white shadow-lg">
            <div className="max-w-sm rounded">
                <img className="w-full object-cover overflow-hidden flex justify-center items-center" src={props.img} alt={`sprite do pokemon ${props.name}`} />
                <h1 className="font-bold text-xl border-t-2 pt-2 text-black text-center">{props.name}</h1>
            </div>
        </div>
    )
}