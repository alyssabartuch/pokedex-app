import React from 'react';

const DamageFrom = ({damage, runSwitch}) => {
    
    const damageFromTypes = {
        bug: 1, 
        dragon: 1, 
        electric: 1, 
        fairy: 1, 
        fighting: 1, 
        fire: 1, 
        flying: 1, 
        ghost: 1, 
        grass: 1, 
        ground: 1, 
        ice: 1, 
        normal: 1, 
        poison: 1, 
        psychic: 1, 
        rock: 1, 
        steel: 1, 
        water: 1
    }

    const doubleDamageFrom = [];
    const halfDamageFrom = [];
    const noDamageFrom = [];

    damage.forEach((damage) => {
        damage.damage_relations.double_damage_from.forEach((ddf) => {
            if (!doubleDamageFrom.includes(ddf.name)) {
                doubleDamageFrom.push(ddf.name);
                runSwitch(damageFromTypes, ddf.name, 2);
            }
        })
    }) 

    damage.forEach((damage) => {
        damage.damage_relations.half_damage_from.forEach((hdf) => {
            if (!halfDamageFrom.includes(hdf.name)) {
                halfDamageFrom.push(hdf.name);
                runSwitch(damageFromTypes, hdf.name, .5);
            }
        })
    })

    damage.forEach((damage) => {
        damage.damage_relations.no_damage_from.forEach((ndf) => {
            if (!noDamageFrom.includes(ndf.name)) {
                noDamageFrom.push(ndf.name);
                runSwitch(damageFromTypes, ndf.name, 0);
            }
        })
    })
    
    return (
        <div>
            <ul className="list pl0 ma0">
                <li className="tc">bug: {damageFromTypes.bug}</li>
                <li className="tc">dragon: {damageFromTypes.dragon}</li>
                <li className="tc">electric: {damageFromTypes.electric}</li>
                <li className="tc">fairy: {damageFromTypes.fairy}</li>
                <li className="tc">fighting: {damageFromTypes.fighting}</li>
                <li className="tc">fire: {damageFromTypes.fire}</li>
                <li className="tc">flying: {damageFromTypes.flying}</li>
                <li className="tc">ghost: {damageFromTypes.ghost}</li>
                <li className="tc">grass: {damageFromTypes.grass}</li>
                <li className="tc">ground: {damageFromTypes.ground}</li>
                <li className="tc">ice: {damageFromTypes.ice}</li>
                <li className="tc">normal: {damageFromTypes.normal}</li>
                <li className="tc">poison: {damageFromTypes.poison}</li>
                <li className="tc">psychic: {damageFromTypes.psychic}</li>
                <li className="tc">rock: {damageFromTypes.rock}</li>
                <li className="tc">steel: {damageFromTypes.steel}</li>
                <li className="tc">water: {damageFromTypes.water}</li>
            </ul>
        </div>
    )
}

export default DamageFrom;