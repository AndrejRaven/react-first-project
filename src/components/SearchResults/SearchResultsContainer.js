import {connect} from 'react-redux';
import {getMatchingCards} from '../../redux/cardsRedux.js';
// import {createActionAddCard} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults.js';

const mapStateToProps = (state, props)=> {
  const id = props.match.params.searchString;
  
  return {
    cards: getMatchingCards(state, id),
  };
};


export default connect(mapStateToProps)(SearchResults);

