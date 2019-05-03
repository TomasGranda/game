import React from 'react';
import { Card } from 'react-bootstrap';

import './WorldCell.css';
import uuid from 'uuid';
import { useStateValue } from '../../state';
import { MenuProvider, Menu, Item, theme } from 'react-contexify';
import getAllowMove from '../../utils/allowMove';
import WorldItem from '../WorldItem/WorldItem';
import WorldEntity from '../WorldEntity/WorldEntity';

export default function WorldCell({ items, entities, position }) {
  const [{ playerPosition }, dispath] = useStateValue();
  const movePlayer = () => {
    dispath({
      type: "movePlayer",
      newPosition: position
    })
  };

  const id = uuid();
  return (
    <div>
      <MenuProvider id={id}>
        <Card className="flexCard">
          <Card.Body className="gridCard">
            {items ? items.map((item) =>
              <WorldItem key={uuid()} item={item} />
            ) : ""}
            {entities ? entities.map((entity) =>
              <WorldEntity key={uuid()} entity={entity} />
            ) : ""}
          </Card.Body>
        </Card>
      </MenuProvider>
      <Menu theme={theme.dark} id={id}>
        <Item disabled={!getAllowMove(playerPosition, position)} onClick={movePlayer}>Move to this Cell</Item>
      </Menu>
    </div>
  )
}
