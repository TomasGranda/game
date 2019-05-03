import React from 'react'
import Inventory from '../Inventory/Inventory';
import { Row, Col } from 'react-bootstrap';

export default function HouseView() {
  return (
    <Row>
      <Col xs="5">
        <p>Inventory:</p>
        <Inventory />
        <br />
        <p>House Inventory:</p>
        <Inventory house />
      </Col>
    </Row>
  )
}
