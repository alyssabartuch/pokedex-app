import React from 'react';

const DamageTo = ({damage, runSwitch}) => {
    
    const damageToTypes = {
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

    const doubleDamageTo = [];
    const halfDamageTo = [];
    const noDamageTo = [];
    
    damage.forEach((damage) => {
        damage.damage_relations.double_damage_to.forEach((ddt) => {
            if (!doubleDamageTo.includes(ddt.name)) {
                doubleDamageTo.push(ddt.name);
                runSwitch(damageToTypes, ddt.name, 2);
            }
        })
    }) 

    damage.forEach((damage) => {
        damage.damage_relations.half_damage_to.forEach((hdt) => {
            if (!halfDamageTo.includes(hdt.name)) {
                halfDamageTo.push(hdt.name);
                runSwitch(damageToTypes, hdt.name, .5);
            }
        })
    })


    damage.forEach((damage) => {
        damage.damage_relations.no_damage_to.forEach((ndt) => {
            if (!noDamageTo.includes(ndt.name)) {
                noDamageTo.push(ndt.name);
                runSwitch(damageToTypes, ndt.name, 0);
            }
        })
    }) 

    return (
        <div>
            <ul className="list pl0 ma0">
                <li className="tc">bug: {damageToTypes.bug}</li>
                <li className="tc">dragon: {damageToTypes.dragon}</li>
                <li className="tc">electric: {damageToTypes.electric}</li>
                <li className="tc">fairy: {damageToTypes.fairy}</li>
                <li className="tc">fighting: {damageToTypes.fighting}</li>
                <li className="tc">fire: {damageToTypes.fire}</li>
                <li className="tc">flying: {damageToTypes.flying}</li>
                <li className="tc">ghost: {damageToTypes.ghost}</li>
                <li className="tc">grass: {damageToTypes.grass}</li>
                <li className="tc">ground: {damageToTypes.ground}</li>
                <li className="tc">ice: {damageToTypes.ice}</li>
                <li className="tc">normal: {damageToTypes.normal}</li>
                <li className="tc">poison: {damageToTypes.poison}</li>
                <li className="tc">psychic: {damageToTypes.psychic}</li>
                <li className="tc">rock: {damageToTypes.rock}</li>
                <li className="tc">steel: {damageToTypes.steel}</li>
                <li className="tc">water: {damageToTypes.water}</li>
            </ul>
        </div>
    )
}

export default DamageTo;