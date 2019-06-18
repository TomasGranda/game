import * as types from './types';

class WorldActionHandler {
  constructor(dispath) {
    this.dispath = dispath;
  }

  deleteItem(item, position) {
    this.dispath({
      type: types.DELETE_WORLD_ITEM,
      item: item,
      position: position,
    });
  }

  createItem = (item, position) => {
    this.dispath({
      type: types.CREATE_WORLD_ITEM,
      item: item,
      position: position,
    });
  };

  createBuild = (build, position) => {
    this.dispath({
      type: types.CREATE_BUILD,
      position: position,
      build: build
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