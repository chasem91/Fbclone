import React from 'react';
import { Link } from 'react-router';

export default ({ props }) => {
  return (
    <div className="user-index-item">
      <li>
        <Link to={`/users/${props.id}`}>
          {props.first_name} {props.last_name}
        </Link>
      </li>
    </div>
  );
};
