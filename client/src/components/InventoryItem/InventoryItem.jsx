import React from 'react';
import { Card } from 'react-bootstrap';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Menu, Item, MenuProvider, theme } from 'react-contexify';
import { useStateValue } from '../../state'
import './InventoryItem.css'

export default function InventoryItem(props) {
  const [{ houseItems, items }, dispath] = useStateValue();
  const { house, index, preview } = props;
  const item = house ? houseItems[index] : items[index];
  const id = item ? item.id: uuid();

  const changeLocation = (itemId) => {
    dispath({
      type: "changeItemLocation",
      itemId: itemId,
      position: house,
    });
  };

  return (
    <div>
      <MenuProvider event="onClick" id={preview || !item ? uuid() : id}>
        <Card id={id} className={item ? "inventoryItem" : ""}>
          <Card.Body className="inventory-slot">
            <Card.Text>
              {item && item.icon ? <FontAwesomeIcon icon={Icons[item.icon]} /> : ""}
            </Card.Text>
          </Card.Body>
        </Card>
      </MenuProvider>
      <Menu id={preview ? uuid() : id} theme={theme.dark}>
        <Item onClick={() => changeLocation(id)}>{house ? "Change to Inventory" : "Change to House"}</Item>
      </Menu>
    </div>
  )
}
