import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import info from './game-info/reducer';
import entry from './entry/reducer'
import activeUser from './firebase/reducer';
import cards from './cards/reducer';
import cardbacks from './cardbacks/reducer';
import deckDetails from './create-deck/reducers/deck-options';
import deckCreation from './create-deck/reducers/create-deck';
import {
  tools, activeDeck, activeDeckCopy, deckAuthor,
  activeDeckEditing,
  deckComments,
  deckCommentPostingStatus,
  deckCommentDeletingStatus, deckDeletion
} from './deck/reducers';
import {decks, hotDecks, updateDecks} from './decks/reducers';
import {posts, activePost} from './reddit/reducers';
import {activeUserDecks, shortenedUserDetails} from "./user/reducers";
import windowSize from "./app/windowSize/reducer";

const rootReducer = combineReducers({
  app: combineReducers({
    windowSize
  }),
  home: combineReducers({
    hotDecks
  }),
  info,
  entry,
  users: combineReducers({
    activeUser,
    activeUserDecks
  }),
  cardbacks,
  cards,
  deckDetails,
  deckCreation,
  decks: combineReducers({
    decks,
    updateDecks
  }),
  deckView: combineReducers({
    tools,
    activeDeck,
    activeDeckCopy,
    deckAuthor,
    shortenedUserDetails,
    activeDeckEditing,
    deckComments,
    deckCommentPostingStatus,
    deckCommentDeletingStatus,
    deckDeletion
  }),
  redditPosts: combineReducers({
    posts,
    activePost
  }),
  router: routerReducer
});


export default rootReducer;