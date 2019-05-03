import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import './WorldItem.css';
import { MenuProvider, Menu, theme } from 'react-contexify';

export default function WorldItem(props) {
  const { item } = props;
  return (
    <div className="gridItem">
      <MenuProvider event="onClick">
        <FontAwesomeIcon icon={Icons[item ? item.icon : ""]} />
      </MenuProvider>
      <Menu theme={theme.dark}>

      </Menu>
    </div>
  )
}
