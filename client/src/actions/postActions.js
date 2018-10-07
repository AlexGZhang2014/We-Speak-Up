export function fetchPosts() {
  return dispatch => {
    dispatch({ type: 'FETCHING_POSTS' });

    return fetch('/api/v1/posts.json')
      .then(response => response.json())
      .then(postJSON => dispatch({ type: 'FETCHED_POSTS', posts: postJSON }));
  }
}

export function addPost(state) {
  return dispatch => {
    dispatch({ type: "ADDING_POST" });

    const postData = {
      post: {
        title: state.title,
        content: state.content,
        author: state.author
      }
    }

    fetch('/api/v1/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(postJSON => {
        dispatch({
          type: 'ADDED_POST',
          post: postJSON
        })
      });
  }
}

export function deletePost(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_POST' });
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch('/api/v1/posts/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_POST',
          id: id
        }))
    }
  }
}

export function updatePost(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_POST'});

    const editedPostData = {
      post: {
        id: state.editId,
        title: state.title,
        content: state.content,
        author: state.author,
        comments: state.comments
      }
    }

    fetch('/api/v1/posts/' + state.editId, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedPostData)
    })
      .then(response => response.json())
      .then(postJSON => dispatch({
        type: 'UPDATED_POST',
        post: postJSON
      }));
  }
}
