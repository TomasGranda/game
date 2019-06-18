import Sections from './config/sections';
import { worldReducer, initialState as worldInitialState } from './reducers/worldReducer';
import { inventoryReducer, initialState as inventoryInitialState } from './reducers/inventoryReducer';
import { sectionReducer, initialState as sectionInitialState } from './reducers/sectionReducer';

export const initialState = {
  section: Sections.World,
  worldState: worldInitialState,
  inventory: inventoryInitialState,
  sections: sectionInitialState,
};

export const combineReducers = (state, action) => {
  return {
    ...state,
    worldState: worldReducer(state, action),
    inventory: inventoryReducer(state, action),
    sections: sectionReducer(state, action),
  };
};