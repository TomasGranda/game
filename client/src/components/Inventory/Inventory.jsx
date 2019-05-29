import React from 'react';
import { CardGroup } from 'react-bootstrap';
import 'react-contexify/dist/ReactContexify.min.css';
import uuid from 'uuid';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function Inventory(props) {
    let renderedInventory = [];

    for (let i = 0; i < 8; i++) {
        renderedInventory.push(<InventoryItem key={uuid()} menuId={uuid()} index={i} {...props}/>);
    }

    return (
        <CardGroup>
            {renderedInventory}
        </CardGroup>
    )
}
