import * as types from './types';

class InventoryActionHandler {
  dispath;

  constructor(dispath){
    this.dispath = dispath;
  }

  createItem = (item, position) => {
    this.dispath({
      type: types.CREATE_INVENTORY_ITEM,
      item: item,
    })
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