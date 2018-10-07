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
        adding: false,
        posts: state.posts.concat(post)
      }

    case 'FETCHING_POSTS':
      return { ...state, loading: true }

    case 'FETCHED_POSTS':
      return { ...state, loading: false, posts: action.posts }

    case 'DELETING_POST':
      return { ...state, deleting: true }

    case 'DELETED_POST':
      return {
        ...state,
        deleting: false,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    case 'UPDATING_POST':
      return { ...state, updating: true }

    case 'UPDATED_POST':
      const editedPost = action.post;

      let updatedState = {
        ...state,
        updating: false,
        posts: state.posts.map(post => post.id === action.post.id ? editedPost : post)
      }

      return updatedState;

    default:
      return state;
  }
}
