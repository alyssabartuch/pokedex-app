import React from 'react';
import getDamageFrom from '../helpers/getDamageFrom';
import getDamageTo from '../helpers/getDamageTo';
import './Damage.css';

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
    const damageFromTypes = getDamageFrom(damage, runSwitch);
    const damageToTypes = getDamageTo(damage, runSwitch);


    const getFraction = fraction => {
        var gcd = (a, b) => {
            if (b < 0.0000001) return a;                
            // Since there is a limited precision we need to limit the value.
          
            return gcd(b, Math.floor(a % b));           
            // Discard any fractions due to limitations in precision.
        };
          
        var len = fraction.toString().length - 2;
        var denominator = Math.pow(10, len);
        var numerator = fraction * denominator;
        var divisor = gcd(numerator, denominator);
        
        numerator /= divisor;
        denominator /= divisor;
        
        return (denominator === 1) ? fraction :
        <span><sup>{Math.floor(numerator)}</sup>/<sub>{Math.floor(denominator)}</sub></span>
    }
          

    return (
        <div id="moves">
            <h3 className="mt3 mb1 tc">
                <span className="f6">to</span>
                <span className="right-arrow mr2 ml2">&#8674;</span>
                Damage
                <span className="right-arrow mr2 ml2">&#8674;</span>
                <span className="f6">from</span>
            </h3>
            <div className="list pl0 ma0">
                <p className="ma0">
                    {getFraction(damageFromTypes.bug)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white bug-color">bug</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.bug)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.dragon)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white dragon-color">dragon</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.dragon)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.electric)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white electric-color">electric</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.electric)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.fairy)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white fairy-color">fairy</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.fairy)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.fighting)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white fighting-color">fighting</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.fighting)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.fire)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white fire-color">fire</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.fire)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.flying)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white flying-color">flying</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.flying)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.ghost)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white ghost-color">ghost</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.ghost)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.grass)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white grass-color">grass</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.grass)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.ground)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white ground-color">ground</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.ground)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.normal)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white normal-color">normal</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.normal)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.poison)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white poison-color">poison</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.poison)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.psychic)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white psychic-color">psychic</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.psychic)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.rock)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white rock-color">rock</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.rock)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.steel)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white steel-color">steel</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.steel)}
                </p>
                <p className="ma0">
                    {getFraction(damageFromTypes.water)}
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    <span className="f6 dim br-pill ph3 pv2 mb2 dib white water-color">water</span>
                    <span className="right-arrow mr2 ml2">&#8674;</span>
                    {getFraction(damageToTypes.water)}
                </p>
            </div>


            
        </div>
    )
}

export default Damage;