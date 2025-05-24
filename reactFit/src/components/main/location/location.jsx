import style from "./style.module.css";
import cx from "classnames";

import map from "../../../images/map.jpg";

const Location = () => {
  return (
    <section className={cx(style.location, style.container_wide)}>
      <img
        src={map}
        alt="Branches on the map"
        className={style.location_map_image}
        width="960"
        height="600"
        loading="lazy"
      />
      <div className={style.location_body}>
        <h2
          className={cx(
            style.location_tatle,
            style.title_medium,
            style.backdrop_title,
            style.centered
          )}
          data-title="Look"
        >
          Find us near you
        </h2>
        <div className={style.location_description}>
          <p>
            Nec suas signiferumque id. An eum labore commodo principes. Usu diam
            noluisse cu, nam adipisci
          </p>
        </div>
        <a
          href="/"
          className={cx(style.location_button, style.button, style.transparent)}
        >
          View more
        </a>
      </div>
    </section>
  );
};
export default Location;
