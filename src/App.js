import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      route: 'home',
      pokemonList: [],
      pokemonDetail: []
    }
  }

  componentDidMount() {
      this.getPokemonList()
  }
  
  getPokemonList = () => {
    const ORIGINAL_151 = '151';

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ORIGINAL_151}`)
      .then(response => response.json()) 
      .then(pokemon => {
        this.setState({ pokemonList: pokemon.results, isLoading: false });
      })
      .catch(console.log)
  }

  getPokemonInfo = (url) => {
    fetch(`${url}`)
    .then(response => response.json)
    .then(data => this.setState({ pokemon: data }))
  } 

  onRouteChange = (route) => {
    this.setState({route})
  }

  onPokemonDetail = (pokemon) => {
    
    this.setState({ pokemonDetail: pokemon })
  }

  render() {
    
    if (this.state.isLoading) {
      return <div>Loading...</div>
    } else if (this.state.route === 'home') {
      return (
        <div className="App">
          <header> 
            <h1 className="tc ttc">pokedex app</h1>
          </header>
          {/* TODO: add search field input */}
          <PokemonList 
            pokemonList={this.state.pokemonList}
            onRouteChange={this.onRouteChange}
            onPokemonDetail ={this.onPokemonDetail}/>
        </div>
      );
    } else if (this.state.route === 'detail') {
      return (
        <section className="">
          <PokemonDetail 
            pokemonDetail={this.state.pokemonDetail}
            onRouteChange={this.onRouteChange} />
        </section>
      )
            
    }
    
  }
  
}

export default App;
