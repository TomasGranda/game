import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Menu, Item, MenuProvider, theme } from 'react-contexify';
import { useStateValue } from '../../state'
import './InventoryItem.css'
import * as types from '../../actionTypes'

export default function InventoryItem(props) {

  const [{ houseItems, items }, dispath] = useStateValue();
  const { house, index, preview, menuId } = props;

  const item = house ? houseItems[index] : items[index];

  const itemId = item && item.id ? item.id : null;

  const changeLocation = (itemId) => {
    dispath({
      type: types.CHANGE_ITEM_LOCATION,
      itemId: itemId,
      inHouse: house,
    });
  };

  const dropItem = (itemId) => {
    dispath({
      type: types.DROP_ITEM,
      itemId: itemId,
      inHouse: false,
    });
  };

  return (
    itemId ?
      <div>
        <MenuProvider event="onClick" id={menuId}>
          <Card id={itemId} className={item ? "inventoryItem" : ""}>
            <Card.Body className="inventory-slot">
              <Card.Text>
                {item && item.icon ? <FontAwesomeIcon icon={Icons[item.icon]} /> : ""}
              </Card.Text>
            </Card.Body>
          </Card>
        </MenuProvider>
        <Menu id={menuId} theme={theme.dark}>
          {preview
            ? <Item onClick={() => dropItem(itemId)}>Drop Item</Item>
            : <Item onClick={() => changeLocation(itemId)}>{house ? "Change to Inventory" : "Change to House"}</Item>
          }
        </Menu>
      </div>
      : <div><Card id={itemId} className={item ? "inventoryItem" : ""}>
        <Card.Body className="inventory-slot">
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card></div>
  )
}
