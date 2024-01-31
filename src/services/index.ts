import http from './http'

export async function getPokemonList() {
    return http.get(
        `/pokemon`
    )
}