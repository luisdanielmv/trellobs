import React, { Component } from 'react';
import { arrayOf, object, string } from 'prop-types';

import { Board, Nav } from '../../components/';

class BoardContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div>
                <Nav/>
                <Board/>
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

// export default connect(mapStateToProps)(BoardContainer);
export default BoardContainer;