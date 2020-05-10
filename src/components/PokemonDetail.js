import React, { Component } from 'react';
import GenderRatio from './GenderRatio';
import SpeciesProfile from './SpeciesProfile';
import EvolutionChain from './EvolutionChain';
import Genus from './Genus';
import EggGroup from './EggGroup';
import Stats from './Stats';
import Types from './Types';
import Moves from './Moves';
import Damage from './Damage';
import Pokeball from './Pokeball';

class PokemonDetail extends Component {
    
    constructor() {
        super() 
        this.state = {
            pokemon: [], 
            species: [],
            speciesInfo: [],
            genderInfo: [],
            evolutionChain: [],
            abilities: [], 
            damage: [],
            moves: [],
            stats: [],
            types: [],
            isLoading: true
        }
    }

    async componentDidMount() {

        const detailResponse = await fetch(`${this.props.pokemonDetail.url}`);
        const detailJson = await detailResponse.json();
        

        this.setState({
            pokemon: detailJson, 
            species: detailJson.species,
            abilities: detailJson.abilities, 
            moves: detailJson.moves,
            stats: detailJson.stats,
            types: detailJson.types
        })

        await this.getSpeciesInfo();
        await this.getGenderInfo();
        await this.getEvolutionChainInfo();
        await this.getDamageInfo();
    }

    getSpeciesInfo = async () => {
        const speciesResponse = await fetch(`${this.state.species.url}`);
        const speciesJson = await speciesResponse.json();
        this.setState({speciesInfo: speciesJson})
    }

    getGenderInfo = async () => {
        const femaleResponse = await fetch(`https://pokeapi.co/api/v2/gender/1`);
        const femaleJson = await femaleResponse.json();
        
        let gender = femaleJson.pokemon_species_details.find(o => {
            return o.pokemon_species.name === this.state.pokemon.name
        });

        if (!gender) {
            const maleResponse = await fetch(`https://pokeapi.co/api/v2/gender/2`);
            const maleJson = await maleResponse.json();

            gender = maleJson.pokemon_species_details.find(o => {
                return o.pokemon_species.name === this.state.pokemon.name
            });
        }

        if (!gender) {
            const genderlessResponse = await fetch(`https://pokeapi.co/api/v2/gender/3`);
            const genderlessJson = await genderlessResponse.json();

            gender = genderlessJson.pokemon_species_details.find(o => {
                return o.pokemon_species.name === this.state.pokemon.name
            });
        }

        this.setState({genderInfo: gender})
    }

    getEvolutionChainInfo = async () => {
        const evoChainResponse = await fetch(`${this.state.speciesInfo.evolution_chain.url}`);
        const evoChainJson = await evoChainResponse.json();
        this.setState({evolutionChain: evoChainJson })
    }

    getDamageInfo = async () => {
        const damageUrls = [];

        this.state.types.forEach(async (type) => {
            damageUrls.push(type.type.url);
        })

        Promise.all(damageUrls.map(url => {
            return fetch(url).then(damageResponse => damageResponse.json())
        })).then(damageResults => {
            this.setState({ damage: damageResults, isLoading: false });
        }).catch((err) => console.log(err))
        
    }

    render() {

        if (this.state.isLoading) {
            return <Pokeball />
        } 
        else {
            const { 
                pokemon, 
                speciesInfo, 
                genderInfo,
                evolutionChain, 
                abilities, 
                moves, 
                stats,
                damage, 
                types, 
            } = this.state;
            const { 
                name, 
                base_experience, 
                height, 
                weight, 
                id 
            } = pokemon;
            
            return (
                <div className="mw6 center pa3 tc bg-lightest-blue br2 pa1 ma2 bw2 shadow-5">
                    <button onClick={() => this.props.onRouteChange('home')}>Home</button>
                    
                    <h1>{name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />

                    <Types types={types}/>

                    <Genus speciesInfo={speciesInfo}/>

                    <Stats stats={stats}/>

                    <GenderRatio genderInfo={genderInfo} name={name} />

                    <SpeciesProfile
                        speciesInfo={speciesInfo}
                        height={height} 
                        weight={weight} 
                        base_experience={base_experience} />

                    <Damage damage={damage}/>

                    
                    <EggGroup speciesInfo={speciesInfo}/>

                    <EvolutionChain evolutionChain={evolutionChain}/>

                    <Moves moves={moves}/>
                    
                </div>
            )
        }
    }   
        
}

export default PokemonDetail;
