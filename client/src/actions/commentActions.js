export function fetchComments() {
  return dispatch => {
    dispatch({ type: 'FETCHING_COMMENTS' });

    return fetch('/api/v1/comments.json')
      .then(response => response.json())
      .then(commentJSON => dispatch({ type: 'FETCHED_COMMENTS', comments: commentJSON }));
  }
}

export function addComment(state) {
  return dispatch => {
    dispatch({ type: "ADDING_COMMENT" });

    const commentData = {
      comment: {
        content: state.content,
        author: state.author,
        postId: state.post.id
      }
    }

    fetch('/api/v1/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData)
    })
      .then(response => response.json())
      .then(commentJSON => {
        dispatch({
          type: 'ADDED_COMMENT',
          comment: commentJSON
        })
      });
  }
}

export function deleteComment(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_COMMENT' });
    if (window.confirm("Are you sure you want to delete this comment?")) {
      fetch('/api/v1/comments/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_COMMENT',
          id: id
        }))
    }
  }
}

export function updateComment(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_COMMENT'});

    const editedCommentData = {
      comment: {
        id: state.editCommentId,
        content: state.content,
        author: state.author,
        post: state.post
      }
    }

    fetch('/api/v1/comments/' + state.editCommentId, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedCommentData)
    })
      .then(response => response.json())
      .then(commentJSON => dispatch({
        type: 'UPDATED_COMMENT',
        comment: commentJSON
      }));
  }
}
