import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addBlog } from '../actions/blogs';
import { Form } from 'semantic-ui-react';

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
      <Form
        onSubmit={this.handleSubmit}
        style={{
          padding: '10px',
          background: 'rgb(23, 89, 131)',
          borderRadius: '15px'
        }}
      >
        <Form.Input
          value={this.state.title}
          onChange={this.onChangeT}
          autoFocus
          placeholder="Name of Blog"
        />
        <Form.TextArea
          value={this.state.description}
          onChange={this.onChangeD}
          placeholder="Description of blog"
        />
        <Form.Button type="submit">Add Blog</Form.Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);
