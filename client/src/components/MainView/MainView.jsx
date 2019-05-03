import React from 'react'
import { Card } from 'react-bootstrap';
import { useStateValue } from "../../state";
import Sections from '../../config/sections.json';


import './MainView.css';
import HouseView from '../HouseView/HouseView';
import WorldView from '../WorldView/WorldView';

export default function MainView() {
    const [{ section }] = useStateValue();

    switch (section) {
        case Sections.Home.id:
            return (
                <Card className="mainView">
                    <HouseView />
                </Card>
            )
        case Sections.Portal.id:
            return (
                <Card className="mainView">
                    {Sections.Portal.name}
                </Card>
            )
        case Sections.World.id:
            return (
                <Card className="mainView">
                    <WorldView />
                </Card>
            )
        default:
            return <Card>Error, State Section doesn't exist</Card>;
    }
}
