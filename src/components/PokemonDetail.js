import React, { Component } from 'react';

class  PokemonDetail extends Component {
    
    constructor() {
        super() 
        this.state = {
            pokemon: [], 
            species: [],
            speciesInfo: [],
            genderInfo: [],
            evolutionChain: [],
            abilities: [], 
            moves: [],
            stats: [],
            types: [],
            isLoading: true
        }
    }

    componentDidMount() {

        fetch(`${this.props.pokemonDetail.url}`)
        .then(response => response.json())
        .then(data => this.setState({
            pokemon: data, 
            species: data.species,
            abilities: data.abilities, 
            moves: data.moves,
            stats: data.stats,
            types: data.types
        }))
        .then(() => {
            fetch(`${this.state.species.url}`)
            .then(response => response.json())
            .then(species => this.setState({ 
                speciesInfo: species
            }))
            .then(() => {
                fetch(`${this.state.speciesInfo.evolution_chain.url}`)
                .then(response => response.json())
                .then(evoChain => this.setState({ 
                    evolutionChain: evoChain.chain
                }))
                .catch(console.log)
            })
            .then(() => {
                fetch(`https://pokeapi.co/api/v2/gender/1`)
                .then(response => response.json())
                .then(gender => this.setState({ 
                    genderInfo: gender,
                    isLoading: false
                }))
                .catch(console.log)
            })
            .catch(console.log)
        })
        .catch(console.log())
    }

    render() {
        


        if (this.state.isLoading) {
            return <div>Loading...</div>
        } 
        else {
            const { pokemon, speciesInfo, genderInfo, evolutionChain, abilities, moves, stats, types } = this.state;
            const { name, base_experience, height, weight, id } = pokemon;

            const evolution = []

            if (evolutionChain !== undefined) {
                evolution.push(evolutionChain.species.name)
                if (evolutionChain.evolves_to[0] !== undefined) {
                    evolution.push(evolutionChain.evolves_to[0].species.name)
                    if (evolutionChain.evolves_to[0].evolves_to[0] !== undefined) {
                        evolution.push(evolutionChain.evolves_to[0].evolves_to[0].species.name)
                    }
                }
            } 

            const flavorText = speciesInfo.flavor_text_entries.find(o => {
                return o.version.name === 'y' && o.language.name === 'en'
            }).flavor_text;

            const gender = genderInfo.pokemon_species_details.find(o => o.pokemon_species.name === this.state.pokemon.name);
            
            let genderRatio = null;

            if (gender !== undefined) {
                switch(gender.rate) {
                    case 1:
                        genderRatio = { male: '87.5%', female: '12.5%' }
                        break;
                    case 4:
                        genderRatio = { male: '50%', female: '50%' }
                        break;
                    case 6:
                        genderRatio = { male: '12.5%', female: '87.5%' }
                        break;
                    case 8:
                        genderRatio = { male: '0%', female: '100%' }
                        break;
                    default:
                        genderRatio = { male: '100%', female: '0%' }
                        break;
                }
            } else {
                genderRatio = { male: '100%', female: '0%' }
            }
            
            
            return (
                <div className="mw6 center pa3 tc bg-lightest-blue br2 pa1 ma2 bw2 shadow-5">
                    <button onClick={() => this.props.onRouteChange('home')}>Home</button>
                    
                    <h1>{name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />

                    <h3 className="mt3 mb1">Gender Ratio:</h3>

                    <ul className="list pl0 ma0">
                        <li>{genderRatio.male} ♂</li>
                        <li>{genderRatio.female} ♀</li>
                        
                    </ul>

                    <h3 className="mt3 mb1">Profile:</h3>
                    <ul className="list pl0 ma0">
                        <li>Height: {height}</li>
                        <li>Weight: {weight}</li>
                        <li>Capture Rate: {speciesInfo.capture_rate}</li>
                        <li>Base Exp: {base_experience}</li>
                        <li>Base Happiness: {speciesInfo.base_happiness}</li>
                        <li>Color: {speciesInfo.color.name}</li>
                    </ul>
                    
                    <h3 className="mt3 mb1">{speciesInfo.genera.find(o => o.language.name === 'en').genus}:</h3>
                    <p className="mt1">{flavorText}</p>

                    <ul className="list pl0 ma0">
                        <li>HP: {stats.find(o => o.stat.name === 'hp').base_stat}</li>
                        <li>Attack: {stats.find(o => o.stat.name === 'attack').base_stat}</li>
                        <li>Defense: {stats.find(o => o.stat.name === 'defense').base_stat}</li>
                        <li>Speed: {stats.find(o => o.stat.name === 'speed').base_stat}</li>
                        <li>Sp Atk: {stats.find(o => o.stat.name === 'special-attack').base_stat}</li>
                        <li>Sp Def: {stats.find(o => o.stat.name === 'special-defense').base_stat}</li>
                    </ul>

                    <h3 className="mt3 mb1">Type(s):</h3>
                    <ul className="list pl0 ma0">
                        {
                            types.map((types, i) => {
                                return <li key={i}>{types.type.name}</li>
                            })
                        }
                    </ul>

                    <h3 className="mt3 mb1">Egg Group:</h3>
                    <ul className="list pl0 ma0">
                        {
                            speciesInfo.egg_groups.map((eggGroup, i) => {
                            return <li key={i}>{eggGroup.name}</li>
                            })
                        }
                    </ul>

                    <h3 className="mt3 mb1">Evo Chain:</h3>
                        <ul className="list pl0 ma0">
                            {
                               evolution.map((species, i) => {
                                return <li key={i}>{species}</li>
                               }) 
                            }
                        </ul>

                    <h3 className="mt3 mb1">Abilities:</h3>
                    <ul className="list pl0 ma0">
                        {
                           abilities.map((abilities, i) => {
                               return <li key={i}>{abilities.ability.name}</li>
                           }) 
                        }
                    </ul>
    
                    <h3 className="mt3 mb1">Level-Up Moves:</h3>
                    <ul className="list pl0 ma0">
                        {
                           moves.map((moves, i) => {
                               if (moves.version_group_details[0].move_learn_method.name === 'level-up') {
                                return <li key={i}>{moves.move.name}</li>
                               } else {
                                   return null
                               }
                           }) 
                        }
                    </ul>
                </div>
            )
        }
    }   
        
}

export default PokemonDetail;