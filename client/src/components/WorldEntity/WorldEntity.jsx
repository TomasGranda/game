import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
// import './WorldItem.css';

export default function WorldEntity(props) {
  const { entity } = props;
  return (
    <div className="gridEntity">
      <FontAwesomeIcon icon={Icons[entity ? entity.icon : ""]} />
    </div>
  )
}