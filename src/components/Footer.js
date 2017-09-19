import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Recommended</FilterLink>
    {' '}
    <FilterLink>Unrecommended</FilterLink>
  </div>
)

export default Footer;
