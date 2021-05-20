import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      icon: PropTypes.string,
      addCard: PropTypes.func,
    }
    
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {cards, title, icon, addCard} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span><Icon name={icon} /></span>
            {title}
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}     
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </section>
      );
    }
}
  
export default Column;