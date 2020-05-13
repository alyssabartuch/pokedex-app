import React from 'react';
import './Colors.css';

const Types = ({ types }) => {

    return (
        <div id="types">
            <h3 className="mt3 mb1 underline">Type(s)</h3>
                <div className="list pl0 ma0">
                    {
                        types.map((types, i) => {
                            return <div key={i} className={`ttc w4 f6 center br-pill ph3 pv2 mb2  white ${types.type.name}-color shadow-4`}>{types.type.name}</div>
                        })
                    }
                </div>
        </div>
        
    )
}

export default Types;