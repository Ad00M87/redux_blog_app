const blogs = (state = [], action) => {
  switch( action.type ) {
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'TOGGLE_BLOG':
      return state.map( blog => {
        if (blog.id === action.id)
          return { ...blog, recommend: !blog.recommend }
        return blog
      })
    default:
      return state;
  }
}

export default blogs;
