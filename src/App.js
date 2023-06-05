
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextLink, setNextLink] = useState('');
    const [previousLink, setPreviousLink] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPokemon() {
            setLoading(true)
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
                console.log(response.data);
                setPokemonList(response.data.results);
                setNextLink(response.data.next);
                setPreviousLink(response.data.previous);
                setLoading(true)
            } catch (e) {
                console.error(e);
                setError(true)
            }
            setLoading(false)

        }


        void getPokemon();
    }, []);

    const handleNext = async () => {
        try {
            const response = await axios.get(nextLink);
            console.log(response.data);
            setPokemonList(response.data.results);
            setNextLink(response.data.next);
            setPreviousLink(response.data.previous);
        } catch (e) {
            console.error(e);
            setError(true)
        }
    };

    const handlePrevious = async () => {
        try {
            const response = await axios.get(previousLink);
            // console.log(response.data);
            setPokemonList(response.data.results);
            setNextLink(response.data.next);
            setPreviousLink(response.data.previous);
        } catch (e) {
            console.error(e);
            setError(true)
        }




    };

    return (
        <>
            <div>
                <button type="button" onClick={handlePrevious} disabled={!previousLink}>
                    Terug
                </button>
                <button type="button" onClick={handleNext} disabled={!nextLink}>
                    Volgende
                </button>
            </div>

            {loading && <p>Pagina is aan het laden...</p>}
            {error && <p>Er is iets fout gegaan</p>}
            <div>
                {pokemonList.map((newPokemonList) => {
                    return <PokemonCard key={newPokemonList.name} pokemonName={newPokemonList.name} />;
                })}
            </div>
        </>
    );
}

export default App;

