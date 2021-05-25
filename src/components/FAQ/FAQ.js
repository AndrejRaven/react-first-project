import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import styles from './FAQ.scss';
import PropTypes from 'prop-types';
import {faqData} from '../../data/dataStore';

class FAQ extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
    }

    static defaultProps = {
      title: faqData.title,
      image: faqData.image,
    }
  
    render() {
      const {title, image} = this.props;
      
      return (
        <section className={styles.component}>
          <Container> 
            <Hero titleText={title} imgSource={image}/>
            <ul className={styles.listContainer}>
              <li className={styles.listItem} ><a href=''>About</a></li>
              <li className={styles.listItem} ><a href=''>Author</a></li>
              <li className={styles.listItem} ><a href=''>Tech stack</a></li>
              <li className={styles.listItem} ><a href=''>Whats new</a></li>
              <li className={styles.listItem} ><a href=''>React app</a></li>
            </ul>
          </Container>
        </section>
      );
    }
}
  
export default FAQ;