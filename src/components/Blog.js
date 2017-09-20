import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';

const styles = {
  recommend: { textDecoration: 'underline', color: 'rgb(59, 214, 33)'},
  blog: { cursor: 'pointer' }
}

const Blog = ({ id, title, description, recommend, dispatch }) => (
  <div>
    <li
      onClick={ () => dispatch(toggleBlog(id)) }
      style={ recommend ? {...styles.recommend, ...styles.blog} : styles.blog }
    >
      {title} - {description}
    </li>
    <button>Edit</button>
    <button>Delete</button>
  </div>
)

export default connect()(Blog);
