import React, { createContext, useContext, useReducer } from 'react';
import Sections from './config/sections.json';
import Items from "./config/items.json";
import uuid from 'uuid';
import * as Entities from './config/entities.json';

export const initialState = {
  playerId: "playerId",
  section: Sections.World.id,
  items: [ { ...Items.arrow, id: uuid() }, { ...Items.coffee, id: uuid() } ],
  houseItems: [ { ...Items.coffee, id: uuid() } ],
  world: [
    [
      {items: [ Items.arrow, Items.coffee ]}, {}, {}
    ],
    [
      {}, {entities: [{ ...Entities.Player, id: "playerId" }]}, {}
    ],
    [
      {}, {}, {}
    ]
  ],
  playerPosition: [1,1]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeClave':
      return {
        ...state,
        clave: action.newClave,
      };
    case 'changeSection':
      return {
        ...state,
        section: action.newSection,
      }
    case 'deleteItem':
      return {
        ...state,
        items: state.items.filter( x => x!==action.targetItem)
      }
    case 'changeItemLocation':
      let newHouseItems = state.houseItems, newItems = state.items, item;

      // action.position ( house=true, inventory=false )
      if(action.position){
        item = state.houseItems.find( (x) => x.id === action.itemId );
        newHouseItems = newHouseItems.filter( (x) => x.id !== action.itemId );
        newItems.push(item);
      } else {
        item = state.items.find( (x) => x.id === action.itemId );
        newItems = newItems.filter( (x) => x.id !== action.itemId );
        newHouseItems.push(item);
      }

      return {
        ...state,
        houseItems: newHouseItems,
        items: newItems,
      }
    case 'movePlayer':
      const { world, playerPosition, playerId } = state;
      const { newPosition } = action;
      let newWorld = world;

      // Delete from world
      newWorld[playerPosition[0]][playerPosition[1]].entities = newWorld[playerPosition[0]][playerPosition[1]].entities.filter( entity => entity.id!==playerId);

      // TODO: Delete this "hack"
      if(!newWorld[newPosition[0]][newPosition[1]].entities) newWorld[newPosition[0]][newPosition[1]].entities = [];

      // Add to world
      newWorld[newPosition[0]][newPosition[1]].entities.push({ ...Entities.Player, id: playerId });
      
      return {
        ...state,
        world: newWorld,
        playerPosition: newPosition,
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

