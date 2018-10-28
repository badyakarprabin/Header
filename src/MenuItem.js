import React from 'react';

const MenuItem = props => {
  return (
    <li class="nav-item nav-menu">
      <a class="nav-link" href="#">
        {props.menuName}
      </a>
    </li>
  );
};

export default MenuItem;
