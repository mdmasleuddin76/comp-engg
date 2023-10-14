import React from 'react';

function Menu({ section, links }) {
  return (
    <div className=" flex flex-col flex-wrap">
      {links.map((link, index) => (
        <div>
        <a href={link.url} key={index}>
          {link.text}
        </a>
        </div>
      ))}
    </div>
  );
}

export default Menu;
