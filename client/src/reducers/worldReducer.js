import * as types from '../actions/types';
import createWorld from '../utils/createWorld';
import uuid from 'uuid';
import Entities from '../config/entities';

export const initialState = {
  playerId: "playerId",
  world: createWorld(5, 5),
  playerPosition: [1, 1],
}

export const worldReducer = ({ worldState }, action) => {
  let newWorld;
  switch (action.type) {
    case types.PUT_ITEM:
      newWorld = [...worldState.world];

      newWorld[action.position[0]][action.position[1]].items.push(action.item);

      return {
        ...worldState,
        world: newWorld,
      }
    case types.CREATE_BUILD:
      newWorld = [...worldState.world];

      newWorld[action.position[0]][action.position[1]].builds.push({
        icon: action.build.icon,
        id: uuid(),
        name: action.build.name
      });

      return {
        ...worldState,
        world: newWorld,
      }
    case types.MOVE_PLAYER:
      const { world, playerPosition, playerId } = worldState;
      newWorld = [...world];

      // Delete from world
      newWorld[playerPosition[0]][playerPosition[1]].entities = newWorld[playerPosition[0]][playerPosition[1]].entities.filter(entity => entity.id !== playerId);

      // Add to world
      newWorld[action.newPosition[0]][action.newPosition[1]].entities.push({ ...Entities.Player, id: playerId });

      return {
        ...worldState,
        world: newWorld,
        playerPosition: action.newPosition,
      }
    default:
      return worldState;
  }
};