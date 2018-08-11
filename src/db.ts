import lodash from 'lodash';
const data = require('./pilot_sample.json');

export function getArchiveItems() {
  return data;
}

let boardItems;
export function getBoardItems() {
  if (boardItems) {
    return boardItems;
  }

  boardItems = data.slice(0, 3);
  return boardItems;
}
