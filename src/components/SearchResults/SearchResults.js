import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
import {Droppable} from 'react-beautiful-dnd';
import {DragDropContext} from 'react-beautiful-dnd';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
    moveCard: PropTypes.func,
  }


  render(){

    const {cards, moveCard} = this.props;

    const moveCardHandler = result => {
      if(
        result.destination
          &&
          (
            result.destination.index != result.source.index
            ||
            result.destination.droppableId != result.source.droppableId
          )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return(
      <Container>
        <DragDropContext onDragEnd={moveCardHandler}>
          <section className={styles.component}>
            <Droppable droppableId={'search-id'}>
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
          </section>
        </DragDropContext>
      </Container>
    );
  }
}

export default SearchResults;