/* eslint-disable no-alert */
const getDamageTo = (damage, runSwitch) => {
    
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

        return damageToTypes
}


export default getDamageTo;
