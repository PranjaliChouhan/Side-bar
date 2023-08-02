import React, { useState, useMemo } from 'react';
import { menuItems } from './menu';

const Sidebar = () => {
  const [openSubMenus, setOpenSubMenus] = useState([]);
  const [toggled, setToggled] = useState(false);
 

  const toggleBreakpointSidebar = () => {
    setToggled((prev) => !prev);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const isSubMenuOpen = useMemo(() => {
    return (index) => openSubMenus[index] || false;
  }, [openSubMenus]);

  return (
    <>
    <div className={`sidebar ${openSubMenus ? 'openSubMenus' : ''} ${toggled ? 'toggled' : ''}`}>
      
      <div className="sidebar-collapser" onClick={toggleBreakpointSidebar}>
     
        <button className={`toggle-btn ${toggled ? 'left' : 'right'}`} type="button">
          {toggled ? '<' : '>'}
        </button>
        
      </div>
      <div className="sidebar-content">
        {toggled ? ( 
          menuItems.map((menuItem, index) => (
            <div key={menuItem.title} 
            className="menu-item-icon" 
            onClick={() => toggleSubMenu(index)}
           
            >

              {menuItem.icon}
            
            </div>
          ))
        ) : (
         
          menuItems.map((menuItem, index) => (
            <div key={menuItem.title}>
              <div className="menu-item" onClick={() => toggleSubMenu(index)}>
              <div className="icon">
                {menuItem.icon}
                </div>
                {menuItem.title}
              </div>
              {isSubMenuOpen(index) && (
                <div className="submenu">
                  {menuItem.submenu &&
                    menuItem.submenu.map((subMenuItem, subIndex) => (
                      <div key={subIndex} className="submenu-item">
                        {subMenuItem.title}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Sidebar;
