import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({pokemonList, onRouteChange, onPokemonDetail }) => {
    
    return (
        <div>
            {
                pokemonList.map((pokemon, i) => {
                    return ( 
                        <PokemonCard 
                            pokemonInfo={pokemonList[i]} 
                            key={i}
                            onRouteChange={onRouteChange}
                            onPokemonDetail={onPokemonDetail} />
                    );
                })
            }


        </div>
    )
}



export default PokemonList;