import React from 'react';

const SpeciesProfile = ({speciesInfo, height, weight, base_experience }) => {

    return (
        <div id="profile">
            <h3 className="mt4 mb2 underline">Species Profile</h3>
                <div className="list pl0">
                    <div className="cf ph2-ns flex justify-center">
                        <div className="flex flex-column w-50 mb3">
                            <p><strong>Height:</strong> {(height * .1).toFixed(1)} m</p>
                            <p><strong>Weight:</strong> {(weight * .1).toFixed(1)} kg</p>
                            <p><strong>Capture Rate:</strong> {((speciesInfo.capture_rate / 255) * 100).toFixed(0)}%</p>
                            <p><strong>Base Exp:</strong> {base_experience}</p>
                            <p><strong>Base Happiness:</strong> {speciesInfo.base_happiness}</p>
                        </div>
                        

                        <div className="flex flex-column w-50 mb3">
                            <p><strong>Color:</strong> {speciesInfo.color.name}</p>
                            <p><strong>Hatch Steps:</strong> {255*(speciesInfo.hatch_counter)}</p>
                            <p><strong>Growtht Rate:</strong> {speciesInfo.growth_rate.name}</p>
                            <p><strong>Habitat:</strong> {speciesInfo.habitat.name}</p>
                        
                        </div>
                    </div>

                    
                </div>
        </div>
        
    )
}

export default SpeciesProfile;