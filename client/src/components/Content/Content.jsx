import React from 'react';

import MainView from '../MainView/MainView';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import SideMenu from '../SideMenu/SideMenu';

export default function Content({ initialState }) {

  return (
    <Container>
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <Card>
            <Card.Body>
              <Menu />
              <Card style={{ minHeight: "75vh" }}>
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <SideMenu />
                    </Col>
                    <Col xs={10}>
                      <MainView />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={1} />
      </Row>
    </Container>
  )
};