import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import './WorldItem.css';
import { MenuProvider, Menu, theme, Item } from 'react-contexify';
import uuid from "uuid";
import { useStateValue } from "../StateProvider/StateProvider";
import comparePositions from '../../utils/comparePositions';
import getPositionById from '../../utils/getPositionById';
import CombinedActionHandler from '../../actions/combinedActions';

export default function WorldItem({ item }) {
  const [{ worldState: { playerPosition, world } }, dispatch] = useStateValue();

  const id = item && item.id ? item.id : uuid();
  const itemPosition = getPositionById(world, id);

  const combinedActionHandler = new CombinedActionHandler(dispatch);

  return (
    <div className="gridItem">
      <MenuProvider id={id} event="onClick">
        <span>
          {item && item.icon ? <FontAwesomeIcon icon={Icons[item.icon]} /> : ""}
        </span>
      </MenuProvider>
      <Menu id={id} theme={theme.dark}>
        <Item disabled={!comparePositions(playerPosition, itemPosition)} onClick={() => combinedActionHandler.pickUpItem(item, itemPosition)}>Pick up</Item>
      </Menu>
    </div>
  )
}
