import React from 'react'
import { Nav, Button, Card } from "react-bootstrap";
import { useStateValue } from "../../state";
import Sections from '../../config/sections.json';
import uuid from 'uuid';

import './SideMenu.css';

export default function SideMenu() {
    const [state, dispath] = useStateValue();

    const buttons = Object.keys(Sections).map( (sec) =>
        <Button key={uuid()} onClick={() => dispath({ type: "changeSection", newSection: Sections[sec].id })} className="nav-button">
            {Sections[sec].name}
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
