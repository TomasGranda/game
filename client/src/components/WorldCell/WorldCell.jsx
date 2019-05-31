import React from 'react';
import { Card } from 'react-bootstrap';

import './WorldCell.css';
import uuid from 'uuid';
import { useStateValue } from '../StateProvider/StateProvider';
import { MenuProvider, Menu, Item, theme } from 'react-contexify';
import getAllowMove from '../../utils/getAllowMove';
import WorldItem from '../WorldItem/WorldItem';
import WorldEntity from '../WorldEntity/WorldEntity';
import comparePositions from '../../utils/comparePositions';
import Builds from '../../config/builds';
import WorldBuild from '../WorldBuild/WorldBuild';
import WorldActionHandler from '../../actions/worldActions';

export default function WorldCell({ position }) {
  const [{ worldState: { playerPosition, world } }, dispath] = useStateValue();

  const worldActionHandler = new WorldActionHandler(dispath);

  const worldCell = world[position[0]] ? world[position[0]][position[1]] : "";

  const items = worldCell && worldCell.items ? worldCell.items : [];
  const entities = worldCell && worldCell.entities ? worldCell.entities : [];
  const builds = worldCell && worldCell.builds ? worldCell.builds : [];
  
  let maxX = world.length;
  let maxY = world[0].length;
  
  const borderCell = position[0] < 0 || position[1] < 0 || position[0] >= maxX || position[1] >= maxY;

  const movePlayer = () => {
    worldActionHandler.movePlayer(position);
  };

  const id = uuid();
  return (
    <div>
      <MenuProvider id={id}>
        <Card style={borderCell ? {backgroundColor: "black"} : {}} className="flexCard">
          <p>({position[0]},{position[1]})</p>
          {borderCell ? "" :
          <Card.Body className="gridCard">
            {items ? items.map((item) =>
              <WorldItem key={uuid()} item={item} />
            ) : ""}
            {entities ? entities.map((entity) =>
              <WorldEntity key={uuid()} entity={entity} />
            ) : ""}
            {builds ? builds.map((build) =>
              <WorldBuild key={uuid()} build={build} />
            ) : ""}
          </Card.Body>
          }
        </Card>
      </MenuProvider>
      <Menu theme={theme.dark} id={id}>
        <Item disabled={!getAllowMove(playerPosition, position) || borderCell} onClick={movePlayer}>Move to this Cell</Item>
        <Item disabled={!comparePositions(playerPosition, position)} onClick={() => worldActionHandler.createBuild(Builds.House, position)}>Create House</Item>
        <Item disabled={!comparePositions(playerPosition, position)} onClick={() => worldActionHandler.createBuild(Builds.Camp, position)}>Camp</Item>
      </Menu>
    </div>
  )
}
