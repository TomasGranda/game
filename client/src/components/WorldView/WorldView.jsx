import React from 'react'
import { Row, Col } from 'react-bootstrap';

import './WorldView.css'
import WorldCell from '../WorldCell/WorldCell';
import { useStateValue } from '../../state';
import uuid from 'uuid';

export default function WorldView() {
  const [state] = useStateValue();
  let renderedWorld;

  renderedWorld = state.world.map( (row, x) => {
    let columns;
    columns = row.map( (cell, y) => <Col key={uuid()} xs={2}><WorldCell position={[x, y]} {...cell} /></Col>);
    columns.unshift(<Col key={uuid()} xs={3} />);
    columns.push(<Col key={uuid()} xs={3} />);
    return (<Row key={uuid()} className="gridRow">{columns}</Row>);
  });

  return (
    <div>
      {renderedWorld}
    </div>
  )
}
