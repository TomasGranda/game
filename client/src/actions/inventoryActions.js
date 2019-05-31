import * as types from './types';

class InventoryActionHandler {
  dispath;

  constructor(dispath){
    this.dispath = dispath;
  }

  deleteItem = (itemId) => {
    this.dispath({
      type: types.DELETE_ITEM,
      itemId: itemId,
      inHouse: false,
    });
  };
  
  changeLocation = (itemId, isOnHouse) => {
    this.dispath({
      type: types.CHANGE_ITEM_LOCATION,
      itemId: itemId,
      inHouse: isOnHouse,
    });
  };
  
}

export default InventoryActionHandler;