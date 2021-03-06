import React from 'react';

const EggGroup = ({ speciesInfo }) => {
    
    return (
        <div id="egg-group">
            <h3 className="mt4 mb1 underline">Egg Group</h3>
                <ul className="list pl0 ma0">
                    {
                        speciesInfo.egg_groups.map((eggGroup, i) => {
                        return <li key={i} className="ttc">{eggGroup.name}</li>
                        })
                    }
                </ul>
        </div>
        
    )
}

export default EggGroup;