import React from 'react';

const Moves = ({ moves }) => {

    return (
        <div id="moves">
            <h3 className="mt4 mb1 underline">Level-Up Moves</h3>
                <ul className="list pl0 ma0">
                    {
                        moves.map((moves, i) => {
                            if (moves.version_group_details[0].move_learn_method.name === 'level-up') {
                            return <li key={i} className="ttc">{moves.move.name}</li>
                            } else {
                                return null
                            }
                        }) 
                    }
                </ul>
        </div>
        
    )
}

export default Moves;