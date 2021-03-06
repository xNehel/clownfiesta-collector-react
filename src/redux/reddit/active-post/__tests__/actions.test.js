import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#redditActivePostActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state !== undefined) {
        const expectedAction = {
          type: type,
          [key]: state
        };
        expect(action(state)).toEqual(expectedAction);
      } else {
        const expectedAction = {
          type: type
        };
        expect(action(state)).toEqual(expectedAction);
      }
    })
  };

  testActions(actions.fetchRedditPostRequest, types.FETCH_REDDIT_POST_REQUEST);
  testActions(actions.fetchRedditPostSuccess, types.FETCH_REDDIT_POST_SUCCESS, 'payload', []);
  testActions(actions.fetchRedditPostFailure, types.FETCH_REDDIT_POST_FAILURE, 'payload', {});
});