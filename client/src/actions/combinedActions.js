import WorldActionHandler from './worldActions';
import InventoryActionHandler from './inventoryActions';

class CombinedActionHandler {
  constructor(dispath) {
    this.dispath = dispath;
    this.worldActionHandler = new WorldActionHandler(dispath);
    this.inventoryActionHandler = new InventoryActionHandler(dispath);
  }

  pickUpItem = (item, position) => {
    this.worldActionHandler.deleteItem(item, position);
    this.inventoryActionHandler.createItem();
  };

  dropItem = (item, position) => {
    this.inventoryActionHandler.deleteItem(item.id);
    this.worldActionHandler.createItem(item, position);
  };

}

export default CombinedActionHandler;