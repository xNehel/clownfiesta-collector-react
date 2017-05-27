import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({activeUser, currentDeck, handleDeckVotingClick}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck} handleDeckVotingClick={handleDeckVotingClick}/>
        <Content currentDeck={currentDeck} activeUser={activeUser}/>
      </div>
  )
};

export default RightContainer;

RightContainer.propTypes = {
  currentDeck: PropTypes.object
};