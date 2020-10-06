import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
    <a className='navbar-brand ml-2' href='/saved'>
        My Library
      </a>
      <a className='navbar-brand px-3' href='/'>
       Search
      </a>
    </nav>
  );
}

export default Nav;
