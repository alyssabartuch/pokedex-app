import React from 'react';
import DamageFrom from './DamageFrom';
import DamageTo from './DamageTo';

const Damage = ({ damage }) => {
    
    const runSwitch = (damageCategory, damageType, multiplier) => {
        switch(damageType) {
            case 'bug': 
                damageCategory.bug *= multiplier;
                break;
            case 'dragon': 
                damageCategory.dragon *= multiplier;
                break;
            case 'electric': 
                damageCategory.electric *= multiplier;
                break;
            case 'fairy': 
                damageCategory.fairy *= multiplier;
                break;
            case 'fighting': 
                damageCategory.fighting *= multiplier;
                break;
            case 'fire': 
                damageCategory.fire *= multiplier;
                break;
            case 'flying': 
                damageCategory.flying *= multiplier;
                break;
            case 'ghost': 
                damageCategory.ghost *= multiplier;
                break;
            case 'grass': 
                damageCategory.grass *= multiplier;
                break;
            case 'ground': 
                damageCategory.ground *= multiplier;
                break;
            case 'ice': 
                damageCategory.ice *= multiplier;
                break;
            case 'normal': 
                damageCategory.normal *= multiplier;
                break;
            case 'poison': 
                damageCategory.poison *= multiplier;
                break;
            case 'psychic': 
                damageCategory.psychic *= multiplier;
                break;
            case 'rock': 
                damageCategory.rock *= multiplier;
                break;
            case 'steel': 
                damageCategory.steel *= multiplier;
                break;
            case 'water': 
                damageCategory.water *= multiplier;
                break;
            default: 
            break;
        }
    }

    return (
        <div id="moves">
            <h3 className="mt3 mb1">Damage from:</h3>
            <DamageFrom runSwitch={runSwitch} damage={damage} />
            
            <h3 className="mt3 mb1">Damage to:</h3>
            <DamageTo runSwitch={runSwitch} damage={damage} />
        </div>
    )
}

export default Damage;