export default interface PokemonBase {
    name: string;
    url: string
}

export interface Ability {
    ability: {
        name: string,
        url: string
    };
    is_hidden: boolean;
    slot: number;
}

export interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string
    }
}

export  interface Moves {
    move: {
        name: string;
        url: string;
    };
    version_group_details: [
        {
            level_learned_at: number;
            move_learn_method: {
                name: string;
                url: string
            };
            version_group: {
                name: string;
                url: string
            }
        }
    ]
}

export interface Species {
    name: string;
    url: string
}

export interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Types {
    slot: number;
    type: [
        name: string,
        url: string
    ]
}

export default interface PokemonDetailed {
    abilities: [Ability];
    base_experience: number;
    forms: PokemonBase;
    game_indices: [GameIndex];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves;
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: Species;
    sprites: Sprites;
    types: [Types]
    weight: number
}

export default interface PokemonCard {
    id: number;
    name: string;
    sprites: Sprites;
    types: [Types];
}