import React, { Component } from 'react';
import { arrayOf, object, string } from 'prop-types';

import { List } from '../../components/';

class ListContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        let { list } = this.props;
        return (
            <List list={ list }/>
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

// export default connect(mapStateToProps)(ListContainer);
export default ListContainer;