import * as types from '../actions/types';
import uuid from 'uuid';
import Items from '../config/items';
import { deepCloneArray } from '../utils/deepCloneArray';

export const initialState = {
  items: [{ ...Items.Arrow, id: uuid() }, { ...Items.Coffee, id: uuid() }],
  houseItems: [{ ...Items.Coffee, id: uuid() }],
}

export const inventoryReducer = ({ inventory }, action) => {
  let newHouseItems, newItems, item;
  switch (action.type) {
    case types.DELETE_ITEM:
      return {
        ...inventory,
        items: inventory.items.filter(x => x.id !== action.itemId),
      }
    case types.CHANGE_ITEM_LOCATION:
      newHouseItems = deepCloneArray(inventory.houseItems);
      newItems = deepCloneArray(inventory.items);

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
      newItems = deepCloneArray(inventory.items);

      newItems.push(item);

      return {
        ...inventory,
        items: newItems,
      }
    case types.CREATE_INVENTORY_ITEM:
      newItems = deepCloneArray(inventory.items);


      if (action.item.id) {
        newItems.push(action.item);
      } else {
        newItems.push({ ...Items[action.item], id: uuid() });
      }
      console.log(newItems)

      return {
        ...inventory,
        items: newItems,
      };
    default:
      return inventory;
  }
};