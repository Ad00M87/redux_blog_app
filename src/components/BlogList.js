import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const viewable = (blogs, currentFilter) => {
  // eslint-disable-next-line
  switch(currentFilter) {
    case 'All':
      return blogs;
    case 'Unrecommended':
      return blogs.filter( b => !b.recommend )
    case 'Recommended':
      return blogs.filter( b => b.recommend )
  }
}

const BlogList = ({ blogs, filter }) => (
  <div>
    <ol>
      { viewable(blogs, filter).map( b => <Blog key={b.id} {...b} /> )}
    </ol>
  </div>
)

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(BlogList);
