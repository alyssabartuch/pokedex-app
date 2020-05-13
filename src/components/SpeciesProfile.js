import React from 'react';

const SpeciesProfile = ({speciesInfo, height, weight, base_experience }) => {

    return (
        <div id="profile">
            <h3 className="mt4 mb1 underline">Species Profile</h3>
                <div className="list pl0">
                    <div className="cf ph2-ns flex justify-center">
                        <div className="flex flex-column w-50 mb3">
                            <p>Height: {(height * .1).toFixed(1)} m</p>
                            <p>Weight: {(weight * .1).toFixed(1)} kg</p>
                            <p>Capture Rate: {((speciesInfo.capture_rate / 255) * 100).toFixed(0)}%</p>
                            <p>Base Exp: {base_experience}</p>
                            <p>Base Happiness: {speciesInfo.base_happiness}</p>
                        </div>
                        

                        <div className="flex flex-column w-50 mb3">
                            <p>Color: {speciesInfo.color.name}</p>
                            <p>Hatch Steps: {255*(speciesInfo.hatch_counter)}</p>
                            <p>Growtht Rate: {speciesInfo.growth_rate.name}</p>
                            <p>Habitat: {speciesInfo.habitat.name}</p>
                        
                        </div>
                    </div>

                    
                </div>
        </div>
        
    )
}

export default SpeciesProfile;