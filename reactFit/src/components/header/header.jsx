import Logo from "./";

import style from "./style.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <a href="/" className={style.header_logo}>
        <img
          src="images/logo.png"
          alt=""
          class="header-logo-imeg"
          width="135"
          height="25"
          loading="lazy"
        />
      </a>
      <nav class="header-menu">
        <ul class="header-menu-list">
          <li class="header-menu-item">
            <a href="/" class="header-menu-link is-current">
              Home
            </a>
          </li>
          <li class="header-menu-item">
            <a href="/" class="header-menu-link">
              Pages
            </a>
          </li>
          <li class="header-menu-item">
            <a href="/" class="header-menu-link">
              Portfolio
            </a>
          </li>
          <li class="header-menu-item">
            <a href="/" class="header-menu-link">
              Blog
            </a>
          </li>
          <li class="header-menu-item">
            <a href="/" class="header-menu-link">
              Shop
            </a>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <button type="button" class="header-book-button button">
          Book now
        </button>
        <button class="header-burger-button" type="button" title="Open menu">
          <span class="visually-hidden">Open menu</span>
          <span class="header-burger-button-line"></span>
          <span class="header-burger-button-line"></span>
          <span class="header-burger-button-line"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
