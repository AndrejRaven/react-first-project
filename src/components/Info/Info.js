import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Info.scss';
import PropTypes from 'prop-types';
import {infoData} from '../../data/dataStore';

class Info extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
  }

  static defaultProps = {
    title: infoData.title,
    image: infoData.image,
  }

  render() {
    const {title, image} = this.props;
    
    return (
      <section className={styles.component}>
        <Container>
          <Hero titleText={title} imgSource={image}/>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
      </section>
    );
  }
}

export default Info;