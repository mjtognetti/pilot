import * as React from 'react';


export default function ArchiveCard(props: any) {
  const body: string = props.body;
  const title: string = props.title;
  return (
    <div className="ArchiveCard">
      <div className="ArchiveCard-body">{body}</div>
      <div className="ArchiveCard-title">{title}</div>
    </div>
  );
}
