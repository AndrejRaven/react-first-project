import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';


class App extends React.Component {


  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
      </main>
    );
  }
}

export default App;
