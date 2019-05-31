import React from 'react'
import { Nav, Button, Card } from "react-bootstrap";
import { useStateValue } from "../StateProvider/StateProvider";
import Sections from '../../config/sections';
import uuid from 'uuid';
import * as types from '../../actions/types';

import './SideMenu.css';

export default function SideMenu() {
    const [{ sections: { section } }, dispath] = useStateValue();

    const buttons = Object.keys(Sections).map( (sec) =>
        <Button key={uuid()} onClick={() => dispath({ type: types.CHANGE_SECTION, newSection: Sections[sec] })} className="nav-button">
            {Sections[sec]}
        </Button>
    );

    return (
        <Card className={section}>
            <Nav defaultActiveKey="/home" className="flex-column">
                {buttons}
            </Nav>
        </Card>
    )
}
