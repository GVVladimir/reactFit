import style from "./style.module.css";
import cx from 'classnames'

const Nav = () => {
  return (
    <nav className={style.header_menu}>
      <ul className={style.header_menu_list}>
        <li className={style.header_menu_item}>
          <a href="/" className={style.header_menu_link}>
            Home
          </a>
        </li>
        <li className={style.header_menu_item}>
          <a href="/" className={cx(style.header_menu_link, style.is_current)}>
            Pages
          </a>
        </li>
        <li className={style.header_menu_item}>
          <a href="/" className={style.header_menu_link}>
            Portfolio
          </a>
        </li>
        <li className={style.header_menu_item}>
          <a href="/" className={style.header_menu_link}>
            Blog
          </a>
        </li>
        <li className={style.header_menu_item}>
          <a href="/" className={style.header_menu_link}>
            Shop
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
