import "../styles/Navbar.css";
import React, { useState } from "react";
import Todo from "./todo";
import UseMemo from "./useMemo";
import UseCallback from "./useCallback";
import ReduxToolkit from "./reduxToolkit";
import { Counter } from "./Counter";

enum NavItemType {
  TODO = "TODO",
  USE_MEMO = "USE_MEMO",
  USE_CALLBACK = "USE_CALLBACK",
  REDUX_TOOLKIT = "REDUX_TOOLKIT",
  COUNTER = "COUNTER",
}

const Navbar: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState(NavItemType.TODO);

  const handleNavItemChange = (navItem: NavItemType) => {
    setActiveNavItem(navItem);
  };

  const renderActiveNavItem = () => {
    switch (activeNavItem) {
      case NavItemType.TODO:
        return <Todo />;
      case NavItemType.USE_MEMO:
        return <UseMemo />;
      case NavItemType.USE_CALLBACK:
        return <UseCallback />;
      case NavItemType.REDUX_TOOLKIT:
        return <ReduxToolkit />;
      case NavItemType.COUNTER:
        return <Counter />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="navbar-container">
        <nav>
          <ul>
            <li
              className={activeNavItem === NavItemType.TODO ? "active" : ""}
              onClick={() => handleNavItemChange(NavItemType.TODO)}
            >
              Todo
            </li>
            <li
              className={activeNavItem === NavItemType.USE_MEMO ? "active" : ""}
              onClick={() => handleNavItemChange(NavItemType.USE_MEMO)}
            >
              UseMemo
            </li>
            <li
              className={
                activeNavItem === NavItemType.USE_CALLBACK ? "active" : ""
              }
              onClick={() => handleNavItemChange(NavItemType.USE_CALLBACK)}
            >
              UseCallback
            </li>
            <li
              className={
                activeNavItem === NavItemType.REDUX_TOOLKIT ? "active" : ""
              }
              onClick={() => handleNavItemChange(NavItemType.REDUX_TOOLKIT)}
            >
              ReduxToolkit
            </li>
            <li
              className={activeNavItem === NavItemType.COUNTER ? "active" : ""}
              onClick={() => handleNavItemChange(NavItemType.COUNTER)}
            >
              Counter
            </li>
          </ul>
        </nav>
      </div>
      <div className="content-container">{renderActiveNavItem()}</div>
    </>
  );
};

export default Navbar;
