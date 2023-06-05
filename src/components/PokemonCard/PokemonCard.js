import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokemonCard = ({pokemonName}) => {
    const [ pokemon, setPokemon] = useState({})


    useEffect(() => {
        async function getPokemonData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                // console.log(response.data)
                setPokemon(response.data)
            } catch (e) {
                console.error(e)
            }
        }

       void getPokemonData()
    }, [])
    return (
        <div>
        {Object.keys(pokemon).length > 0 &&
                <>

                        <h2>{pokemon.species.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.species.name}`}/>
                        <p>Moves: {pokemon.moves.length}</p>
                        <p>Weight: {pokemon.weight}</p>

                        <ul>
                            {pokemon.abilities.map((newAbilityArray) => {
                                return <li key={newAbilityArray.ability.slot}>{newAbilityArray.ability.name}</li>
                            })}
                        </ul>

                </>
        }
        </div>
    );
}

export default PokemonCard;