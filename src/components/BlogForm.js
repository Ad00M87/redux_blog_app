import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addBlog } from '../actions/blogs';

class BlogForm extends React.Component {
  state = { title: '' }

  onChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.state.title;
    let { dispatch, id } = this.props;
    let blog = { title, id, recommend: false }
    dispatch(addBlog(blog));
    dispatch(incId());
    this.setState({ title: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.onChange} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);
