import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Pokeball from './components/Pokeball';
import SearchBox from './components/SearchBox';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      route: 'home',
      pokemonSearch: '',
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

  onRouteChange = (route) => {
    this.setState({route})
  }

  onPokemonDetail = (pokemon) => {
    this.setState({ pokemonDetail: pokemon })
  }

  onSearchChange = (event) => {
    this.setState({pokemonSearch: event.target.value})
  }

  render() {
    const filteredPokemon = this.state.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.pokemonSearch.toLowerCase());
    });


    return ( 
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Pokeball">
            <Pokeball />
          </Route>
          <Route path="/">
            <div className="App">
              <header> 
                <h1 className="tc ttc red f-subheadline lh-title mb3">pokédex app</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
              </header>

              <PokemonList 
                pokemonList={filteredPokemon}
                onRouteChange={this.onRouteChange}
                onPokemonDetail ={this.onPokemonDetail}/>
            </div>
          </Route>
          <Route path="/">
            <section className="">
              <PokemonDetail 
                pokemonDetail={this.state.pokemonDetail}
                onRouteChange={this.onRouteChange} 
                onPokemonDetail={this.onPokemonDetail}/>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
    )

    // if (this.state.isLoading) {
    //   return <Pokeball />
    // } else if (this.state.route === 'home') {
    //   return (
        // <div className="App">
        //   <header> 
        //     <h1 className="tc ttc red f-subheadline lh-title mb3">pokédex app</h1>
        //     <SearchBox onSearchChange={this.onSearchChange}/>
        //   </header>

        //   <PokemonList 
        //     pokemonList={filteredPokemon}
        //     onRouteChange={this.onRouteChange}
        //     onPokemonDetail ={this.onPokemonDetail}/>
        // </div>
    //   );
    // } else if (this.state.route.includes('pokemon/')) {
    //   return (
        // <section className="">
        //   <PokemonDetail 
        //     pokemonDetail={this.state.pokemonDetail}
        //     onRouteChange={this.onRouteChange} 
        //     onPokemonDetail={this.onPokemonDetail}/>
        // </section>
    //   )
            
    // }
  }
  
}

export default App;
