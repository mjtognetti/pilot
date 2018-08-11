import * as React from 'react';


export default function BoardCard(props) {
  const body: string = props.body;

  return (
    <div className="BoardCard">
      <div className="BoardCard-body"><div>{body}</div></div>
    </div>
  )
}
