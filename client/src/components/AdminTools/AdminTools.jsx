import React from 'react'

import { Card } from 'react-bootstrap';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'uuid';
import { useStateValue } from "../StateProvider/StateProvider";
import Items from '../../config/items';
import InventoryActionHandler from '../../actions/inventoryActions';

export default function AdminTools() {
  const [, dispath] = useStateValue();

  const inventoryActionHandler = new InventoryActionHandler(dispath);

  return (
    <div>
      {
        Object.keys(Items).map((itemName) => {
          return (
            <Card key={uuid()} onClick={() => inventoryActionHandler.createItem(itemName)}>
              <Card.Body className="inventory-slot">
                <Card.Text>
                  <FontAwesomeIcon icon={Icons[Items[itemName].icon]} />
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}
