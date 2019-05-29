import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
// import './WorldItem.css';

export default function WorldBuild(props) {
  const { build } = props;

  return (
    <div className="gridEntity">
      <FontAwesomeIcon icon={Icons[build ? build.icon : ""]} />
    </div>
  )
}