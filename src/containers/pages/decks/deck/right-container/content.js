import React from 'react';
import PropTypes from 'prop-types';
import DeckDescription from './sections/description';
import DeckComments from './sections/comments';

const Content = ({activeUser, patch, activeDeck, deckEditView, decksNotEqual, descriptionsNotEqual, params}) =>{
  return (
      <div className="content scrollable">
        <div className="container__details">
          <DeckDescription activeDeck={activeDeck}
                           activeUser={activeUser}
                           deckEditView={deckEditView}
                           decksNotEqual={decksNotEqual}
                           descriptionsNotEqual={descriptionsNotEqual}/>
          <DeckComments activeDeck={activeDeck} patch={patch} activeUser={activeUser} params={params}/>
        </div>
      </div>
  )
};

export default Content;

Content.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object
};