import * as React from 'react';

/*
import ArchiveCard from './ArchiveCard';
import Archive from './Archive';
import {getArchiveItems} from './db'
*/
import Board from './Board';
import {getBoardItems} from './db';


export class App extends React.Component<undefined, undefined> {
  render() {
    const boardItems = getBoardItems();
    return (
      <Board items={boardItems} />
    );
    /*
    return (
      <Archive>
        {archiveItems.map(item => <ArchiveCard {...item} />)}
      </Archive>
    );
    */
  }
}
