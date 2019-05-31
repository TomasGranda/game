import * as types from '../actions/types';
import uuid from 'uuid';
import Items from '../config/items';

export const initialState = {
  items: [{ ...Items.Arrow, id: uuid() }, { ...Items.Coffee, id: uuid() }],
  houseItems: [{ ...Items.Coffee, id: uuid() }],
}

export const inventoryReducer = ({ inventory, worldState: { playerPosition, world } }, action) => {
  let newHouseItems, newItems, item, newWorld;
  switch (action.type) {
    case types.DELETE_ITEM:
      return {
        ...inventory,
        items: inventory.items.filter(x => x.id !== action.itemId),
      }
    case types.CHANGE_ITEM_LOCATION:
      newHouseItems = [...inventory.houseItems];
      newItems = [...inventory.items];

      if (action.inHouse) {
        item = inventory.houseItems.find((x) => x.id === action.itemId);
        newHouseItems = newHouseItems.filter((x) => x.id !== action.itemId);
        newItems.push(item);
      } else {
        item = inventory.items.find((x) => x.id === action.itemId);
        newItems = newItems.filter((x) => x.id !== action.itemId);
        newHouseItems.push(item);
      }

      return {
        ...inventory,
        houseItems: newHouseItems,
        items: newItems,
      }
    case types.PICKUP_ITEM:
      newItems = [...inventory.items];
      newWorld = [...world];

      newWorld = newWorld.map((x) => x.map((y) => {
        if (y.items) {
          let i = y.items.find(element => element.id === action.itemId);
          if (i) {
            item = i;
            y.items.splice(y.items.indexOf(i), 1);
          }
        }
        return y;
      }));

      newItems.push(item);

      return {
        ...inventory,
        items: newItems,
        // world: newWorld,
      }
    default:
      return inventory;
  }
};