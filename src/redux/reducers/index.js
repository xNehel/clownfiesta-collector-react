import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import patch from '../patch/reducer';
import entry from './entry/entry'
import users from './users';
import cards from '../cards/reducer';
import issues from './issues';
import expansions from './expansions/expansions';
import adventures from './adventures/adventure'
import deckDetails from './create-deck/deck-options';
import deckCreation from './create-deck/create-deck';
import {
  tools, activeDeck, activeDeckCopy, deckAuthor,
  activeDeckEditing,
  deckComments,
  deckCommentPostingStatus,
  deckCommentDeletingStatus
} from '../deck/reducers';
import {decks, hotDecks, updateDecks} from '../decks/reducers';
import {posts, activePost} from '../reddit/reducers';
import {shortenedUserDetails} from "../user/reducers";


const rootReducer = combineReducers({
  home: combineReducers({
    hotDecks
  }),
  patch,
  entry,
  users,
  cards,
  expansions,
  adventures,
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
    deckCommentDeletingStatus
  }),
  redditPosts: combineReducers({
    posts,
    activePost
  }),
  issues,
  routing: routerReducer
});


export default rootReducer;