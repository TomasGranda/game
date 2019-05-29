import React, { createContext, useContext, useReducer } from 'react';
import Sections from './config/sections';
import Items from "./config/items";
import uuid from 'uuid';
import Entities from './config/entities';
import * as types from './actionTypes';
import createWorld from './utils/createWorld';

export const initialState = {
  playerId: "playerId",
  section: Sections.World,
  items: [{ ...Items.Arrow, id: uuid() }, { ...Items.Coffee, id: uuid() }],
  houseItems: [{ ...Items.Coffee, id: uuid() }],
  world: createWorld(5,5),
  playerPosition: [1, 1],
};

export const reducer = (state, action) => {
  let newWorld, newItems, newHouseItems, item;
  switch (action.type) {
    case types.CHANGE_CLAVE:
      return {
        ...state,
        clave: action.newClave,
      };
    case types.CHANGE_SECTION:
      return {
        ...state,
        section: action.newSection,
      }
    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(x => x !== action.targetItem)
      }
    case types.CHANGE_ITEM_LOCATION:
      newHouseItems = state.houseItems;
      newItems = state.items

      if (action.inHouse) {
        item = state.houseItems.find((x) => x.id === action.itemId);
        newHouseItems = newHouseItems.filter((x) => x.id !== action.itemId);
        newItems.push(item);
      } else {
        item = state.items.find((x) => x.id === action.itemId);
        newItems = newItems.filter((x) => x.id !== action.itemId);
        newHouseItems.push(item);
      }

      return {
        ...state,
        houseItems: newHouseItems,
        items: newItems,
      }
    case types.MOVE_PLAYER:
      const { world, playerPosition, playerId } = state;
      const { newPosition } = action;
      newWorld = world;

      // Delete from world
      newWorld[playerPosition[0]][playerPosition[1]].entities = newWorld[playerPosition[0]][playerPosition[1]].entities.filter(entity => entity.id !== playerId);

      // Add to world
      newWorld[newPosition[0]][newPosition[1]].entities.push({ ...Entities.Player, id: playerId });

      return {
        ...state,
        world: newWorld,
        playerPosition: newPosition,
      }
    case types.PICKUP_ITEM:
      newItems = state.items;
      newWorld = state.world;

      newWorld = newWorld.map((x, xIndex) => x.map( (y, yIndex) => {
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
        ...state,
        items: newItems,
        world: newWorld,
      }
    case types.DROP_ITEM:
      newWorld = state.world;
      newItems = state.items;

      item = newItems.find( i => i.id === action.itemId );

      newItems = newItems.filter( i => i.id !== action.itemId );

      if(newWorld[state.playerPosition[0]][state.playerPosition[1]].items){
        newWorld[state.playerPosition[0]][state.playerPosition[1]].items.push(item); 
      } else {
        newWorld[state.playerPosition[0]][state.playerPosition[1]].items = [];
        newWorld[state.playerPosition[0]][state.playerPosition[1]].items.push(item); 
      }

      return {
        ...state,
        world: newWorld,
        items: newItems,
      }
    case types.CREATE_BUILD:
      newWorld = state.world;
      
      newWorld[action.position[0]][action.position[1]].builds.push({
        icon: action.build.icon,
        id: uuid(),
        name: action.build.name
      });
    
      return {
        ...state,
        world: newWorld,
      }
    default:
      return state;
  }
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
export const StateContext = createContext();

