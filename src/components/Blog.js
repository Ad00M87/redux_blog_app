import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';

const styles = {
  recommend: { border: '2px solid rgb(199, 204, 10)', color: 'rgb(214, 98, 33)'},
  blog: { cursor: 'pointer' }
}

const Blog = ({ id, title, description, recommend, dispatch }) => (
  <div>
    <li
      onClick={ () => dispatch(toggleBlog(id)) }
      style={ recommend ? {...styles.recommend, ...styles.blog} : styles.blog }
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
    <br />
    <button>Edit</button>
    <button>Delete</button>
  </div>
)

export default connect()(Blog);
