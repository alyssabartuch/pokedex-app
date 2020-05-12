import React from 'react';
import '../App.css';

const GenderRatio = ({ genderInfo, name }) => {

    const getRatio = () => {
        
        switch(genderInfo.rate) {
            case -1: 
                return { male: '0%', female: '0%'}
            case 0: 
                return { male: '100%', female: '0%' }
            case 1:
                return { male: '87.5%', female: '12.5%' }
            case 2: 
                return { male: '75%', female: '25%'}
            case 4:
                return { male: '50%', female: '50%' }
            case 6:
                return { male: '25%', female: '75%' }
            case 7: 
                return { male: '12.5%', female: '87.5%' }
            case 8:
                return { male: '0%', female: '100%' }
            default:
                return { male: '0%', female: '0%' }
        }
    }
    
    const genderRatio = getRatio()

    return (
        <div id="gender">
            <h3 className="mt3 mb1">Gender Ratio:</h3>
                <div className="list pl0 ma0">
                    <p className="ma0">{genderRatio.male} <span className="male-symbol">♂</span></p>
                    <p className="ma0">{genderRatio.female} <span className="female-symbol">♀</span></p>
                </div>
        </div>
    )
    
}

export default GenderRatio;
