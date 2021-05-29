import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card.js';
import Hero from '../Hero/Hero.js';
import Container from '../Container/Container';
import {searchResult} from '../../data/dataStore';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
    moveCard: PropTypes.func,
  }


  render(){

    const {cards} = this.props;


    return(
      <Container>
        
        <section className={styles.component}>
          <Hero imgSource={searchResult.image} titleText={searchResult.title}/>
          <div className={styles.description}>
            {searchResult.description}          
          </div>
          {cards.map(cardData => (
            <div key={cardData.id} className={styles.card}>
              {cardData.title}
              <Link className={styles.link} to={`/list/${cardData.listId}`}>{cardData.listId}/{cardData.columnId}</Link>
            </div>        
          ))} 
        </section>
        
      </Container>
    );
  }
}

export default SearchResults;