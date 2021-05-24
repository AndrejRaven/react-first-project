import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      icon: PropTypes.string,
      addCard: PropTypes.func,
      id: PropTypes.string,
    }
    
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {cards, title, icon, addCard, id} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span><Icon name={icon} /></span>
            {title}
          </h3>
          <Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Creator text={settings.cardCreatorText} action={addCard}/>
        </section>
      );
    }
}
  
export default Column;