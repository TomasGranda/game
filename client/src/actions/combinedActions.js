import WorldActionHandler from './worldActions';
import InventoryActionHandler from './inventoryActions';

class CombinedActionHandler {
  dispath;
  inventoryActionHandler;
  worldActionHandler;

  constructor(dispath){
    this.dispath = dispath;
    this.worldActionHandler = new WorldActionHandler(dispath);
    this.inventoryActionHandler = new InventoryActionHandler(dispath);
  }

  pickUpItem = (itemId, position) => {

  };
  
  dropItem = (item, position) => {
    this.inventoryActionHandler.deleteItem(item.id);
    this.worldActionHandler.putItem(item, position)
  };
  
}

export default CombinedActionHandler;