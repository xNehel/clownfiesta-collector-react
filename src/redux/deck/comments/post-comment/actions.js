import * as types from "./types";

export function postDeckCommentRequest(payload){
  return {
    type: types.POST_DECK_COMMENT_REQUEST,
    payload
  }
}

export function postDeckCommentSuccess(response){
  return {
    type: types.POST_DECK_COMMENT_SUCCESS,
    payload: response
  }
}

export function postDeckCommentFailure(error){
  return {
    type: types.POST_DECK_COMMENT_FAILURE,
    payload: error
  }
}

export function resetPostingLimit(){
  return {
    type: types.RESET_POSTING_LIMIT,
  }
}