import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';

import store from '../../redux/store';
import { Home, Nav } from '../../components/';

class HomeContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div>
                <Nav/>
                <Home/>
            </div>
        );
    }
}

// const mapStateToProps = store => {
//   return {
//     pokemonList: store.pokemonList,
//     searchTerm: store.searchTerm,
//     selectedPokemon: store.selectedPokemon
//   };
// };

// export default connect(mapStateToProps)(HomeContainer);
export default HomeContainer;