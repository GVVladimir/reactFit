import style from "./style.module.css";
import cx from "classnames";
import "../../../App.css";

const Banner = () => {
  return (
    <section className={style.banner}>
      <h2 className={style.visually_hidden}>Upcoming events</h2>
      <div className={style.banner_body}>
        <div className={style.banner_info}>
          New event <br />
          coming up /<time dateTime="06-07">june 7</time>&nbsp;-&nbsp;
          <time dateTime="06-13">13</time>
        </div>
        <h3 className={style.banner_title}>Crossfit</h3>
      </div>
      <div className={style.banner_pagination}>
        <ul className={style.banner_pagination_list}>
          <li className={style.banner_paginstion_item}>
            <button
              className={style.banner_pagination_button}
              type="button"
            ></button>
          </li>
          <li className={style.banner_paginstion_item}>
            <button
              className={style.banner_pagination_button}
              type="button"
            ></button>
          </li>
          <li className={style.banner_paginstion_item}>
            <button
              className={cx(style.banner_pagination_button, style.is_current)}
              type="button"
            ></button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Banner;
