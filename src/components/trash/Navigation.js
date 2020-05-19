import React from 'react';

function Navigation(props) {
  // console.table(props.items);
  return (
    <ul>
      {props.items.map((item, index) => 
      <li key={index}><a href={item.link}>{item.label}</a></li>
      )}
    </ul>
  );
}

export default Navigation;
