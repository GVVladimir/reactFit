import style from "./style.module.css";
import cx from "classnames";
import family1 from "../../../images/family/1.jpg";
import family2 from "../../../images/family/2.jpg";
import family3 from "../../../images/family/3.jpg";
import family4 from "../../../images/family/4.jpg";
import family5 from "../../../images/family/5.jpg";

const Family = () => {
  return (
    <section className={style.family}>
      <header className={cx(style.family_header, style.container)}>
        <h2
          className={cx(
            style.family_title,
            style.title_big,
            style.backdrop_title,
            style.centered
          )}
          data-title="Part"
        >
          be a part of our fit family
        </h2>
        <div
          className={cx(style.family_description, style.section_description)}
        >
          <p>Training helps you think and feel better. join us!</p>
        </div>
      </header>
      <div className={cx(style.family_body, style.container_wide)}>
        <img
          src={family1}
          alt="Training people"
          className={style.family_image}
          width="414"
          height="479"
          loading="lazy"
        />
        <img
          src={family2}
          alt="Training people"
          className={style.family_image}
          width="744"
          height="479"
          loading="lazy"
        />
        <img
          src={family3}
          alt="Training people"
          className={style.family_image}
          width="396"
          height="479"
          loading="lazy"
        />
        <img
          src={family4}
          alt="Training people"
          className={style.family_image}
          width="396"
          height="479"
          loading="lazy"
        />
        <img
          src={family5}
          alt="Training people"
          className={style.family_image}
          width="414"
          height="479"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Family;
