import * as React from 'react';


export default function Archive(props: any) {
  const children: any = props.children;

  return (
    <div className="Archive">
      {React.Children.map(children, child => <div className="Archive-cell">{child}</div>)}
    </div>
  );
}
