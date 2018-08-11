import * as React from 'react';

import BoardCard from './BoardCard';
import Draggable from 'react-draggable';
import storage from './storage';


const COORDINATES_KEY = 'board.coordinates';

// Random coordinate helpers
// XXX: 400 is an arbitrary number for max random coordinate. Should be the measured width
// for x coordinate and measured height for y coordinate (or just 100 and use percentages).
const randomCoordinate = () => Math.floor(Math.random() * 400));

// Generate random coordinates for each item.
const generateInitialCoordinates = (items) =>
  items.reduce((coordinates, item) => { 
    coordinates[item._id] = { x: randomCoordinate(), y: randomCoordinate() };
    return coordinates;
  }, {});


export default class Board extends React.Component {
  constructor(props: any) {
    super(props)

    // Load coordinates from storage if they exist. Otherwise, initialize with
    // random values.
    let initialCoordinates = storage.get(COORDINATES_KEY);
    if (!initialCoordinates) {
      initialCoordinates = generateInitialCoordinates(props.items); 
      storage.put(COORDINATES_KEY, initialCoordinates);
    }
    this.state = initialCoordinates;
  }

  onStopDrag(item, e, dragData) {
    this.setState(
      () => ({[item._id]: { x: dragData.x, y: dragData.y }),
      () => storage.put('board.coordinates', this.state)
    );
  }

  render() {
    const items: object[] = this.props.items;

    const renderItem = (item) => {
      const coords = this.state[item._id];
      return (
        <Draggable
          key={item._id}
          onStop={(e, d) => this.onStopDrag(item, e, d)}
          defaultPosition={coords}>
          <div className="Board-item">
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
