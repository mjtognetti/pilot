import * as React from 'react';

import WorkspaceManager from './WorkspaceManager'
import ArchiveCard from './ArchiveCard';
import Archive from './Archive';
import Board from './Board';
import {getArchiveItems, getBoardItems} from './db';


export class App extends React.Component<undefined, undefined> {
  constructor(props) {
    super(props);
    this.state = {
      archiveItems: getArchiveItems(),
      boardItems: getBoardItems()
    }
  }

  render() {
    const {archiveItems, boardItems} = this.state;
    return (
      <div className="App">
        <WorkspaceManager>
          <Archive>
            {archiveItems.map(item => <ArchiveCard key={item._id} {...item} />)}
          </Archive>
          <Board items={boardItems} />
        </WorkspaceManager>
      </div>
    );
  }
}
