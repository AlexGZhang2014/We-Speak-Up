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
