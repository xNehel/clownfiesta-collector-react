import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case types.FETCH_UPCOMING_TOURNAMENTS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case types.FETCH_UPCOMING_TOURNAMENTS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false
      }
    }
    
    case types.FETCH_UPCOMING_TOURNAMENTS_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false
      }
    }
    
    default: return state;
  }
}

 