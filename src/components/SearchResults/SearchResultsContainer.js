import {connect} from 'react-redux';
import {getMatchingCards} from '../../redux/cardsRedux.js';
// import {createActionAddCard} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults.js';

const mapStateToProps = (state, props)=> {
  const id = props.match.params.searchString;
  console.log(state.cards.filter(card => new RegExp(id, 'i').test(card.title)));

  return {
    cards: getMatchingCards(state, id),
  };
};


export default connect(mapStateToProps)(SearchResults);

