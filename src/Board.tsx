import * as React from 'react';

import BoardCard from './BoardCard';
import Draggable from 'react-draggable';


const randomCoordinate = () => Math.floor(Math.random() * 400));
const generatePosition = () => ({x: randomCoordinate(), y: randomCoordinate()});

export default class Board extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = this.randomlyPositionElements();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items == this.props.items) {
      return
    }
    this.setState(this.randomlyPositionElements());
  }

  randomlyPositionElements() {
    const state = this.props.items.reduce((coordinates, item) => {
      coordinates[item._id] = generatePosition();
      return coordinates;
    }, {})
    return state;
  }

  onStopDrag(item, e, dragData) {
    this.setState({[item._id]: { x: dragData.x, y: dragData.y });
  }

  render() {
    const items: object[] = this.props.items;

    const renderItem = (item) => {
      const coords = this.state[item._id];
      return (
        <Draggable
          onStop={(e, d) => this.onStopDrag(item, e, d)}
          defaultPosition={coords}>
          <div>
            <BoardCard key={item._id} body={item.body} />
          </div>
        </Draggable>
      );
    }

    return (
      <div className="Board">
        {items.map(renderItem)}
      </div>
    );
  }
}
