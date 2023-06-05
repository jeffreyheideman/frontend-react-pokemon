import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard/PokemonCard";


function App() {



    return (
        <>
            <div>
            <PokemonCard pokemonName="ditto"/>
            <PokemonCard pokemonName="jigglypuff"/>
            </div>
        </>
    )


}

export default App;
