import React from 'react';

const Abilities = ({abilities}) => {

    return (
        <div id="moves">
            <h3 className="mt3 mb1 underline">Abilities</h3>
                <ul className="list pl0 ma0">
                    {
                        abilities.map((abilities, i) => {
                            return <li key={i} className="ttc">{abilities.ability.name}</li>
                        }) 
                    }
                </ul>
        </div>
        
    )
}

export default Abilities;