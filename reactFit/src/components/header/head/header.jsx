import BurgerNav from "../burger/burger";
import Logo from "../logo/logo";
import Nav from "../nav/nav";

import style from "./style.module.css";
import cx from "classnames";
import "../../../index.css";

const Header = () => {
  return (
    <div className={style.header}>
    
        <Logo />
        <Nav />
        <BurgerNav />
      
    </div>
  );
};

export default Header;
