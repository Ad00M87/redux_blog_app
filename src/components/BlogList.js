import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const viewable = (blogs, currentFilter) => {
  // eslint-disable-next-line
  switch(currentFilter) {
    case 'All':
      return blogs;
    case 'Recommended':
      return blogs.filter( b => !b.recommend )
    case 'Unrecommended':
      return blogs.filter( b => b.recommend )
  }
}

const BlogList = ({ blogs, filter }) => (
  <ul>
    { viewable(blogs, filter).map( b => <Blog key={b.id} {...b} /> )}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(BlogList);
