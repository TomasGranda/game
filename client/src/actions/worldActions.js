import * as types from './types';

class WorldActionHandler {
  dispath;

  constructor(dispath){
    this.dispath = dispath;
  }

  createBuild = (build, position) => {
    this.dispath({
      type: types.CREATE_BUILD,
      position: position,
      build: build
    })
  };

  putItem = (item, position) => {
    this.dispath({
      type: types.PUT_ITEM,
      position: position,
      item: item,
    })
  };

  movePlayer = (position) => {
    this.dispath({
      type: types.MOVE_PLAYER,
      newPosition: position
    })
  };
}

export default WorldActionHandler;