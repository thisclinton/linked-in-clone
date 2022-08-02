import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function HeaderLinks({ avatar, Icon, title }) {
  return (
    <div className='HeaderLinks'>
      {Icon && <Icon className='headerlinks__icon' />}
      {avatar && (
        <AccountCircleIcon className='headerlinks__icon' src={avatar} />
      )}
      <span className='headerlinks__title'>{title}</span>
    </div>
  );
}

export default HeaderLinks;
