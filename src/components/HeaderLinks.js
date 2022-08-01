import React from "react";

function HeaderLinks({ Icon, title }) {
  return (
    <div className='HeaderLinks'>
      {Icon && <Icon className='headerlinks__icon' />}
      <span className='headerlinks__title'>{title}</span>
    </div>
  );
}

export default HeaderLinks;
