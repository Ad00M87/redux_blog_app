import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addBlog } from '../actions/blogs';

class BlogForm extends React.Component {
  state = { title: '', description: '' }

  onChangeT = (e) => {
    this.setState({ title: e.target.value });
  }

  onChangeD = (e) => {
    this.setState({ description: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.state.title;
    let description = this.state.description;
    let { dispatch, id } = this.props;
    let blog = { title, description, id, recommend: false }
    dispatch(addBlog(blog));
    dispatch(incId());
    this.setState({ title: '', description: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.onChangeT} autoFocus />
        <input value={this.state.description} onChange={this.onChangeD} />
        <button type="submit">Add Blog</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);
