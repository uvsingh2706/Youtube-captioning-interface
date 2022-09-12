import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
import './sidebarRow.css';

function SidebarRow({selected, Icon, title}) {
    // Props are arguments passed into React components.
    // Props are passed to components via HTML attributes.
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>

    </div>
  )
}

export default SidebarRow