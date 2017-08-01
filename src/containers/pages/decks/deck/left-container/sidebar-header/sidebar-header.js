import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../components/icons/icon";

const SidebarHeader = ({currentDeck}) =>{
  const {type} = currentDeck;
  return (
      <h3 className="sidebar__header">
        Deck Details
        <div>
          <Icon name="copy"/>
          <Icon name={type} type="mode"/>
        </div>
      </h3>
  )
};

export default SidebarHeader;

SidebarHeader.propTypes = {
  currentDeck: PropTypes.shape({
    type: PropTypes.string
  }).isRequired
};