import React from 'react';

const EvolutionProfile = ({evolutionChain}) => {
    
    const evolution = []

            if (evolutionChain !== undefined) {
                evolution.push(evolutionChain.chain.species.name)
                if (evolutionChain.chain.evolves_to[0] !== undefined) {
                    evolution.push(evolutionChain.chain.evolves_to[0].species.name)
                    if (evolutionChain.chain.evolves_to[0].evolves_to[0] !== undefined) {
                        evolution.push(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name)
                    }
                }
            } 

    return (
        <div id="evolution-chain">
            <h3 className="mt3 mb1">Evo Chain:</h3>
                <ul className="list pl0 ma0">
                    {
                        evolution.map((species, i) => {
                        return <li key={i}>{species}</li>
                        }) 
                    }
                </ul>
        </div>
        
    )
}

export default EvolutionProfile;