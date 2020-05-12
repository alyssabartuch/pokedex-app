import React from 'react';

const SpeciesProfile = ({speciesInfo, height, weight, base_experience }) => {

    return (
        <div id="profile">
            <h3 className="mt3 mb1">Species Profile:</h3>
                <ul className="list pl0 ma0">
                    <li>Height: {(height * .1).toFixed(1)} m</li>
                    <li>Weight: {(weight * .1).toFixed(1)} kg</li>
                    <li>Capture Rate: {((speciesInfo.capture_rate / 255) * 100).toFixed(0)}%</li>
                    <li>Base Exp: {base_experience}</li>
                    <li>Base Happiness: {speciesInfo.base_happiness}</li>
                    <li>Color: {speciesInfo.color.name}</li>
                    <li>Hatch Steps: {255*(speciesInfo.hatch_counter)}</li>
                    <li>Growtht Rate: {speciesInfo.growth_rate.name}</li>
                    <li>Habitat: {speciesInfo.habitat.name}</li>
                </ul>
        </div>
        
    )
}

export default SpeciesProfile;