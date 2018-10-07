import React, { Component } from 'react';
import Comments from '../components/Comments';
import { connect } from 'react-redux';
import { fetchComments, addComment, deleteComment, updateComment } from '../actions/commentActions';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '',
      addCommentPostId: null
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      content: '',
      author: '',
      addCommentPostId: null
    })
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  toggleAddStatus = () => {
    this.setState({
      ...this.state,
      addCommentPostId: this.props.post.id
    })
  }

  displayAddCommentForm = () => {
    if (this.state.addCommentPostId) {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Leave a comment">
          </textarea>
          <br></br>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Your username">
          </input>
          <br></br>
          <input type="submit"></input>
        </form>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="posts">
        <button onClick={this.toggleAddStatus}>Add a comment</button>
        {this.displayAddCommentForm()}
        <Comments
          comments={this.props.comments}
          post={this.props.post}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments
});

const mapDispatchToProps = dispatch => ({
  addComment: state => dispatch(addComment(state)),
  fetchComments: () => dispatch(fetchComments()),
  deleteComment: id => dispatch(deleteComment(id)),
  updateComment: (state) => dispatch(updateComment(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
