import React from 'react';
import '../App.css';

const PokemonCard = ({ pokemonInfo, onRouteChange, onPokemonDetail }) => {

    const { name, url } = pokemonInfo
    const id = url.trim().split('/')[6]

    const handleClick = () => {
        const pokemon = {
            id: id,
            name: pokemonInfo.name,
            url: pokemonInfo.url
        }
        
        onPokemonDetail(pokemon)
        onRouteChange('detail')

    }

    return (
        <div className="tc w4 bg-lightest-blue dib br2 pa1 ma2 grow bw2 shadow-5" onClick={() => handleClick()}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
            <h3 className="ttc">{name}</h3>
            
        </div>
    )
    
}

export default PokemonCard;


