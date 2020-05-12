/* eslint-disable no-alert */
const getDamageFrom = (damage, runSwitch) => {

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

    return damageFromTypes
}

export default getDamageFrom;