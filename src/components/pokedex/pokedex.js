import React, { useState, useEffect } from 'react';
import {Component} from 'react';
import Search from '../search-component/search';

class Pokedex extends Component {

    constructor() {
        super();
        this.state = {
          pokemons : [],
          pokemonDetails: [],
          offset: 0,
          loadNumber: 3,
          loading: false,
          searchAttribute: ''
        }
        this.morePokemon = this.morePokemon.bind(this); 
      }

      morePokemon(event) {
        const newOffset = this.state.offset + this.state.loadNumber;
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ offset: newOffset }, () => {
            this.getListOfPokemon();
            this.setState({ loading: false });
          });
        }, 1800);
      }
    
      componentDidMount() {
        this.getListOfPokemon();
      }

      getListOfPokemon() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset +"&limit=" + this.state.loadNumber;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokemons : data.results});
            this.getPokemonDetails();
            this.dynamicSearch();
          }
        })
        .catch(console.log)
      }

      getPokemonDetails() {
        this.state.pokemons.map(info => {
            fetch(info.url)
            .then(response => response.json())
            .then(data => {
                if(data) {
                  var temp = this.state.pokemonDetails;
                  temp.push(data);
                  this.setState({ pokemonDetails: temp })
                }
            })
            .catch(console.log)
        })
      }
    
      render() {
        return (
          <div>
              <Search pokemonToSearch={this.state.pokemonDetails}></Search>
              {
                this.state.loading ? 
                <p className="lead">Loading more pokemon...</p> : 
                <button className="btn btn-primary load-more" onClick={this.morePokemon}>Load more Pokemon...</button>
              }
          </div>
        );
      }
}

export default Pokedex;