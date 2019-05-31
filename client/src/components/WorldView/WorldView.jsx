import React from 'react'
import { Row, Col } from 'react-bootstrap';

import './WorldView.css'
import WorldCell from '../WorldCell/WorldCell';
import { useStateValue } from '../StateProvider/StateProvider';
import uuid from 'uuid';
import getVisibleWorldByPosition from '../../utils/getVisibleWorldByPosition';

export default function WorldView() {
  const [{ worldState: { world, playerPosition } }] = useStateValue();
  const relativesX = [-1,0,1,2,3];
  const relativesY = [-2,-1,0,1,2];
  let renderedWorld;

  const visibleWorld = getVisibleWorldByPosition(world, playerPosition);

  renderedWorld = visibleWorld.map((row, x) => {
    let columns;
    columns = row.map((cell, y) => {
      const posX = playerPosition[0] + relativesX[x], posY = playerPosition[1] + relativesY[y];
      return <Col key={uuid()} xs={2}><WorldCell position={[posX, posY]} {...cell} /></Col>;
    });
    columns.unshift(<Col key={uuid()} xs={1} />);
    columns.push(<Col key={uuid()} xs={1} />);
    return (<Row key={uuid()} className="gridRow">{columns}</Row>);
  });

  return (
    <div>
      {renderedWorld}
    </div>
  )
}
