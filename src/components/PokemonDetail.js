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
import Abilities from './Abilities';

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

        
        const detailJson = await this.getPokemonDetails(this.props.pokemonDetail.url)
        const speciesJson = await this.getSpeciesJson(detailJson.species.url);
        const gender = await this.getGenderJson(detailJson.name);
        const evoChainJson = await this.getEvolutionChainJson(speciesJson.evolution_chain.url);

        const damageUrls = [];

        await detailJson.types.forEach(async (type) => {
            damageUrls.push(type.type.url);
        })

        const damageJson = await this.getDamageJson(damageUrls);

        this.setState({
            pokemon: detailJson, 
            species: detailJson.species,
            speciesInfo: speciesJson,
            genderInfo: gender,
            evolutionChain: evoChainJson,
            abilities: detailJson.abilities, 
            damage: damageJson,
            moves: detailJson.moves,
            stats: detailJson.stats,
            types: detailJson.types,
            isLoading: false
        })
    }

    getPokemonDetails = async (url) => {
        const detailResponse = await fetch(`${url}`);
        const detailJson = await detailResponse.json();
        return detailJson
    }

    getSpeciesJson = async (url) => {
        const speciesResponse = await fetch(`${url}`);
        const speciesJson = await speciesResponse.json();
        return speciesJson
    }

    getGenderJson = async (name) => {
        const femaleResponse = await fetch(`https://pokeapi.co/api/v2/gender/1`);
        const femaleJson = await femaleResponse.json();
        
        let gender = femaleJson.pokemon_species_details.find(o => {
            return o.pokemon_species.name === name
        });

        if (!gender) {
            const maleResponse = await fetch(`https://pokeapi.co/api/v2/gender/2`);
            const maleJson = await maleResponse.json();

            gender = maleJson.pokemon_species_details.find(o => {
                return o.pokemon_species.name === name
            });
        }

        if (!gender) {
            const genderlessResponse = await fetch(`https://pokeapi.co/api/v2/gender/3`);
            const genderlessJson = await genderlessResponse.json();

            gender = genderlessJson.pokemon_species_details.find(o => {
                return o.pokemon_species.name === name
            });
        }

        return gender
    }

    getEvolutionChainJson = async (url) => {
        const evoChainResponse = await fetch(`${url}`);
        const evoChainJson = await evoChainResponse.json();
        return evoChainJson
    }

    getDamageJson = async (urls) => {
        const promisesArray = await urls.map(url => fetch(url));
        const damageResults = [];

        for await (let damageRequest of promisesArray) {
            const damageJson = await damageRequest.json();
            damageResults.push(damageJson);
        }
        return damageResults
    }

    handleClick = (species) => {
        const pokemon = {
            id: species.id,
            name: species.name,
            url: species.url
        }
        console.log(pokemon);
        
        this.props.onPokemonDetail(pokemon);
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
                    <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-red" onClick={() => this.props.onRouteChange('home')}>Home</button>

                    <h1 className="ttc">{name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />

                    <Types types={types}/>

                    <Genus speciesInfo={speciesInfo}/>

                    <div className="mt3 flex justify-around">
                        <Abilities abilities={abilities}/>
                        <GenderRatio genderInfo={genderInfo} name={name} />
                    </div>
                    
            
                    

                    <SpeciesProfile
                        speciesInfo={speciesInfo}
                        height={height} 
                        weight={weight} 
                        base_experience={base_experience} />

                    <Stats stats={stats}/>

                    <Damage damage={damage}/>

                    <Moves moves={moves}/>
                    
                    <EggGroup speciesInfo={speciesInfo}/>

                    <EvolutionChain 
                        handleClick={this.handleClick}
                        evolutionChain={evolutionChain}/>

                    
                    
                </div>
            )
        }
    }   
        
}

export default PokemonDetail;
