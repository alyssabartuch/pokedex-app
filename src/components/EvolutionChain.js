import React from 'react';

const EvolutionProfile = ({ evolutionChain, gatherPokemonInfo, onRouteChange, onPokemonDetail }) => {
    const getSimplifiedEvoChain = () => {
        const simplifiedEvoChain = []
        const evo1 = evolutionChain.chain.species;
        const evo2 = evolutionChain.chain.evolves_to;
        let evo3 = null;

        if (evo1) {
            const id = getId(evo1.url)
            simplifiedEvoChain.push({
                id: id,
                name: evo1.name, 
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            if (evo2.length > 0) {
                const id = getId(evo2[0].species.url)
                simplifiedEvoChain.push({
                    id: id,
                    name: evo2[0].species.name, 
                    url: `https://pokeapi.co/api/v2/pokemon/${id}`
                })
                evo3 = evolutionChain.chain.evolves_to[0].evolves_to;
                if (evo3.length > 0) {
                    const id = getId(evo3[0].species.url)
                    simplifiedEvoChain.push({
                        id: id,
                        name: evo3[0].species.name, 
                        url: `https://pokeapi.co/api/v2/pokemon/${id}`
                    })
                }
            }
        } 

        return simplifiedEvoChain;
    }

    const getId = (url) => {
        return url.trim().split('/')[6]
    }

    const simpleEvoChain = getSimplifiedEvoChain();
    
    const handleClick = (pokemon) => {
        gatherPokemonInfo(pokemon.id);
        onRouteChange(`pokemon/${pokemon.id}`)
        onPokemonDetail({ 
            id: pokemon.id,
            name: pokemon.name, 
            url: pokemon.url
        })

    }

    return (
        <div id="evolution-chain" className="mb1">
            <h3 className="mt4 mb2 underline">Evolution Chain</h3>
                {
                    simpleEvoChain.map((species, i) => {
                        return (
                            <div key={i} className="dib">
                                <div className="br4 ma1 pa1 grow pointer shadow-4 bg-near-white" onClick={() => handleClick(species)}>
                                    <img 
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.id}.png`} 
                                        alt='pokemon' />
                                    <h4 className="ttc">{species.name}</h4>
                                </div>
                                
                            </div>
                        )
                    }) 
                }
        </div>
        
    )
}

export default EvolutionProfile;
