import { useState } from "react";

import MenuItem from "../MenuItem";

function MainNavigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState("");

  function toggleMenu() {
    if (!showMenu) {
      setOpen("open");
      setShowMenu(true);
    } else {
      setOpen("");
      setShowMenu(false);
    }
  }

  function toggleMenuLink() {
    setOpen("");
    setShowMenu(false);
  }

  const menuItems = [
    { path: "/", page: "Home" },
    { path: "/about", page: "About Me" },
    { path: "/projects", page: "My projects" },
    { path: "/contact", page: "Contact Me" },
  ];

  const menu = menuItems.map((menuItem) => (
    <MenuItem
      open={open}
      path={menuItem.path}
      page={menuItem.page}
      key={menuItem.page}
      toggleMenuLink={toggleMenuLink}
    />
  ));

  return (
    <header>
      <div onClick={toggleMenu} className="menu-btn">
        <span className={`menu-btn__burger ${open}`}></span>
      </div>

      <nav className={`nav ${open}`}>
        <ul className={`menu-nav ${open}`}>{menu}</ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
