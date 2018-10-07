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
    this.setState({
      ...this.state,
      comments: this.state.comments.concat({
        content: this.state.content,
        author: this.state.author
      })
    })
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="posts">
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
        <Comments comments={this.props.comments} />
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
