import React from 'react';

const Genus = ({speciesInfo }) => {
    
    const flavorText = speciesInfo.flavor_text_entries.find(o => {
        return o.version.name === 'y' && o.language.name === 'en'
    }).flavor_text;

    return (
        <div id="genus">
            <h3 className="mt4 mb1 underline">{speciesInfo.genera.find(o => o.language.name === 'en').genus}</h3>
                <p className="mt1">{flavorText}</p>
        </div>
        
    )
}

export default Genus;