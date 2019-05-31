import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import './WorldItem.css';
import { MenuProvider, Menu, theme, Item } from 'react-contexify';
import uuid from "uuid";
import { useStateValue } from "../StateProvider/StateProvider";
import comparePositions from '../../utils/comparePositions';
import * as types from '../../actions/types'
import getPositionById from '../../utils/getPositionById';

export default function WorldItem(props) {
  const [{ worldState: { playerPosition, world } }, dispath] = useStateValue();

  const { item } = props;

  const id = item && item.id ? item.id : uuid();
  const itemPosition = getPositionById(world, id);

  const pickUpItem = (itemId) => {
    dispath({
      type: types.PICKUP_ITEM,
      itemId: itemId,
    });
  };

  return (
    <div className="gridItem">
      <MenuProvider id={id} event="onClick">
        <span>
          {item && item.icon ? <FontAwesomeIcon icon={Icons[item.icon]} /> : ""}
        </span>
      </MenuProvider>
      <Menu id={id} theme={theme.dark}>
        <Item disabled={!comparePositions(playerPosition, itemPosition)} onClick={() => pickUpItem(id)}>Pick up</Item>
      </Menu>
    </div>
  )
}
