import React from 'react'
import { Nav, Button, Card } from "react-bootstrap";
import { useStateValue } from "../../state";
import Sections from '../../config/sections';
import uuid from 'uuid';
import * as types from '../../actionTypes'

import './SideMenu.css';

export default function SideMenu() {
    const [state, dispath] = useStateValue();

    const buttons = Object.keys(Sections).map( (sec) =>
        <Button key={uuid()} onClick={() => dispath({ type: types.CHANGE_SECTION, newSection: Sections[sec] })} className="nav-button">
            {Sections[sec]}
        </Button>
    );

    return (
        <Card className={state.section}>
            <Nav defaultActiveKey="/home" className="flex-column">
                {buttons}
            </Nav>
        </Card>
    )
}
