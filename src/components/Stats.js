import React from 'react';

const Stats = ({ stats }) => {

const getPercent = (statName) => {
    let stat = stats.find(o => o.stat.name === statName).base_stat;
    stat = Math.floor((stat / 255) * 100);
    return stat
}

const getStat = (statName) => {
    return stats.find(o => o.stat.name === statName).base_stat;
}

    return (
        <div id="stats">
            <h3 className="mt3 mb1 underline">Base Stats / 255</h3>
                <div className="list pl0 ma0">

                    <div className="w-70 center flex items-center">
                        <div className="f6 w-25 pa2 tr">
                            HP:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('hp')}%`}}>
                                <p className="percent">
                                    {getStat('hp')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-70 center flex items-center">
                        <div className="f6 w-25 pa2 tr">
                            Attack:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('attack')}%`}}>
                                <p className="percent">
                                    {getStat('attack')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-70 center flex items-center"> 
                        <div className="f6 w-25 pa2 tr">
                            Defense:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('defense')}%`}}>
                                <p className="percent">
                                    {getStat('defense')}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-70 center flex items-center">
                        <div className="f6 w-25 pa2 tr">
                            Speed:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('speed')}%`}}>
                                <p className="percent">
                                    {getStat('speed')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-70 center flex items-center">
                        <div className="f6 w-25 pa2 tr">
                            Sp Atk:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('special-attack')}%`}}>
                                <p className="percent">
                                    {getStat('special-attack')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-70 center flex items-center">
                        <div className="f6 w-25 pa2 tr">
                            Sp Def:
                        </div>
                        <div className="progress flex items-center shadow-4">
                            <div className="w-75 pa3 mr2 bar" style={{width: `${getPercent('special-defense')}%`}}>
                                <p className="percent">
                                    {getStat('special-defense')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        
    )
}

export default Stats;