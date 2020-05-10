import React from 'react';

const Stats = ({ stats }) => {

    return (
        <div id="stats">
            <h3 className="mt3 mb1">Stats:</h3>
                <ul className="list pl0 ma0">
                    <li>HP: {stats.find(o => o.stat.name === 'hp').base_stat}</li>
                    <li>Attack: {stats.find(o => o.stat.name === 'attack').base_stat}</li>
                    <li>Defense: {stats.find(o => o.stat.name === 'defense').base_stat}</li>
                    <li>Speed: {stats.find(o => o.stat.name === 'speed').base_stat}</li>
                    <li>Sp Atk: {stats.find(o => o.stat.name === 'special-attack').base_stat}</li>
                    <li>Sp Def: {stats.find(o => o.stat.name === 'special-defense').base_stat}</li>
                </ul>
        </div>
        
    )
}

export default Stats;