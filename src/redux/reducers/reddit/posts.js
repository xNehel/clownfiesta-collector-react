const initialState = {
  posts: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_POSTS': return {
      ...state,
      posts: action.posts
    };
    case 'UPDATE_ACTIVE_POST': return {
      ...state,
      activePost: action.activePost
    };
    case 'TOGGLE_DOMAIN_FILTER': return {
      ...state,
      activeDomainFilter: action.activeDomainFilter
    };
    case 'TOGGLE_CATEGORY_FILTER': return {
      ...state,
      activeCategoryFilter: action.activeCategoryFilter
    };
  }
  return state;
}