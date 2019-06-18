import React from 'react'
import { Card } from 'react-bootstrap';
import { useStateValue } from "../StateProvider/StateProvider";
import Sections from '../../config/sections';


import './MainView.css';
import HouseView from '../HouseView/HouseView';
import WorldView from '../WorldView/WorldView';

export default function MainView() {
    const [{ sections: { section } }] = useStateValue();

    switch (section) {
        case Sections.Home:
            return (
                <Card className="mainView">
                    <HouseView />
                </Card>
            )
        case Sections.Portal:
            return (
                <Card className="mainView">
                    {Sections.Portal}
                </Card>
            )
        case Sections.World:
            return (
                <Card className="mainView">
                    <WorldView />
                </Card>
            )
        default:
            return <Card>Error, State Section doesn't exist</Card>;
    }
}
