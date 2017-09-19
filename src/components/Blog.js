import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';

const styles = {
  recommend: { textDecoration: 'underline', color: 'rgb(59, 214, 33)'},
  blog: { cursor: 'pointer' }
}

const Blog = ({ id, title, recommend, dispatch }) => (
  <li
    onClick={ () => dispatch(toggleBlog(id)) }
    style={ recommend ? {...styles.recommend, ...styles.blog} : styles.blog }
  >
    {title}
  </li>
)

export default connect()(Blog);
