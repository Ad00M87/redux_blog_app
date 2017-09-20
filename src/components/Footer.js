import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div
    style={{
      background: 'rgb(32, 125, 177)',
      color: 'white',
      borderRadius: '15px',
      textAlign: 'center'
    }}
  >
    <h5>Filter:</h5>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Recommended</FilterLink>
    {' '}
    <FilterLink>Unrecommended</FilterLink>
  </div>
)

export default Footer;
