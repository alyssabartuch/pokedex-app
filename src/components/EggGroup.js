import React from 'react';

const EggGroup = ({ speciesInfo }) => {
    
    return (
        <div id="egg-group">
            <h3 className="mt3 mb1">Egg Group:</h3>
                <ul className="list pl0 ma0">
                    {
                        speciesInfo.egg_groups.map((eggGroup, i) => {
                        return <li key={i}>{eggGroup.name}</li>
                        })
                    }
                </ul>
        </div>
        
    )
}

export default EggGroup;