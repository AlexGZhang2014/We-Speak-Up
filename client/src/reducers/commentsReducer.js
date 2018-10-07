export default function commentsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  comments: []
}, action) {
  switch (action.type) {
    case 'ADDING_COMMENT':
      return { ...state, adding: true }

    case 'ADDED_COMMENT':
      const comment = action.comment;
      return {
        ...state,
        adding: false,
        comments: state.comments.concat(comment)
      }

    case 'FETCHING_COMMENTS':
      return { ...state, loading: true }

    case 'FETCHED_COMMENTS':
      return { ...state, loading: false, comments: action.comments }

    case 'DELETING_COMMENT':
      return { ...state, deleting: true }

    case 'DELETED_COMMENT':
      return {
        ...state,
        deleting: false,
        comments: state.comments.filter(comment => comment.id !== action.id)
      }

    case 'UPDATING_COMMENT':
      return { ...state, updating: true }

    case 'UPDATED_COMMENT':
      const editedComment = action.comment;

      let updatedState = {
        ...state,
        updating: false,
        comments: state.comments.map(comment => comment.id === action.comment.id ? editedComment : comment)
      }

      return updatedState;

    default:
      return state;
  }
}
