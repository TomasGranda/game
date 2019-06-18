import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Menu, Item, MenuProvider, theme } from 'react-contexify';
import { useStateValue } from '../StateProvider/StateProvider'
import './InventoryItem.css'
import InventoryActionHandler from '../../actions/inventoryActions';
import CombinedActionHandler from '../../actions/combinedActions';

export default function InventoryItem({ house , index, preview, menuId }) {
  const [{ inventory: { houseItems, items }, worldState: { playerPosition } }, dispath] = useStateValue();
  const isOnHouse = house;

  const inventoryActionHandler = new InventoryActionHandler(dispath);
  const combinedActionHandler = new CombinedActionHandler(dispath);

  const item = isOnHouse ? houseItems[index] : items[index];

  const itemId = item && item.id ? item.id : null;

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
            ? <Item onClick={() => combinedActionHandler.dropItem(item, playerPosition)}>Drop Item</Item>
            : <Item onClick={() => inventoryActionHandler.changeLocation(itemId, isOnHouse)}>{isOnHouse ? "Change to Inventory" : "Change to House"}</Item>
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
