import React from 'react';

import SearchInput, { createFilter } from 'react-search-input';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            listOfPokemon: this.props.pokemonToSearch

        };
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term });
    }

    render() {

        const filteredPokemon = this.state.listOfPokemon.filter(
            createFilter(this.state.searchTerm, 'species.name')
        );

        console.log("Ovo su filtrirani pokemoni: ", filteredPokemon);

        return(
            <div>
                <SearchInput className="search-input" onChange={this.searchUpdated}/>

                {filteredPokemon.map(filtered => {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid card-img-top" src= { filtered.sprites.other['official-artwork'].front_default } height="50px"></img>
                                <h5 className="card-title">{ filtered.name }</h5>
                                <ul>
                                    <li>Height: { filtered.height }</li>
                                    <li>Weight: { filtered.weight } </li>
                                </ul>
                                <button className="btn btn-primary">
                                    <a>See More</a>
                            </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Search