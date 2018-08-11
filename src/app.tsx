import * as React from 'react';

import ArchiveCard from './ArchiveCard';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
        <ArchiveCard title="Title" body="Body copy" /> 
      </div>
    );
  }
}
