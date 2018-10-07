export default function postsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  posts: []
}, action) {
  switch (action.type) {
    case 'ADDING_POST':
      return { ...state, adding: true }

    case 'ADDED_POST':
      const post = action.post;
      return {
        ...state,
        posts: state.posts.concat(post)
      }

    case 'FETCHING_POSTS':
      return { ...state, loading: true }

    case 'FETCHED_POSTS':
      return { ...state, loading: false, posts: action.posts }

    default:
      return state;
  }
}
