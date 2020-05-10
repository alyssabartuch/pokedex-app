import React from 'react';

const Types = ({ types }) => {

    return (
        <div id="types">
            <h3 className="mt3 mb1">Type(s):</h3>
                <ul className="list pl0 ma0">
                    {
                        types.map((types, i) => {
                            return <li key={i}>{types.type.name}</li>
                        })
                    }
                </ul>
        </div>
        
    )
}

export default Types;