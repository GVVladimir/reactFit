import style from "./style.module.css";
import cx from "classnames";

import video from "../../../images/video-placeholder.jpg";

const JoinUs = () => {
  return (
    <section className={style.join_us}>
      <div className={style.join_us_video_wrapper}>
        <video
          src={video}
          className={style.join_us_video}
          width="960"
          height="600"
          poster={video}
        ></video>
        <button className={style.join_us_video_play_button} type="button">
          Play
        </button>
      </div>
      <div className={cx(style.join_us_body, style.container)}>
        <h2 className={style.join_us_title}>Join us</h2>
        <form className={style.join_us_form}>
          <header className={style.join_us_form_header}>
            <h3
              className={cx(
                style.join_us_form_title,
                style.backdrop_title,
                style.title_big,
                style.centered
              )}
              data-title="Go!"
            >
              Start here
            </h3>
            <div
              className={cx(
                style.join_us_form_subtitle,
                style.section_description
              )}
            >
              fill the form below to start your journey
            </div>
          </header>
          <div className={style.join_us_form_body}>
            <label className={style.visually_hidden} for="username">
              Name
            </label>
            <input
              className={cx(style.join_us_form_input, style.input)}
              id="username"
              placeholder="Name"
            />
            <label className={style.visually_hidden} for="email">
              Email
            </label>
            <input
              className={cx(style.join_us_form_input, style.input)}
              id="email"
              placeholder="email"
              type="email"
            />
            <button
              className={cx(
                style.join_us_form_button,
                style.button,
                style.transparent
              )}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
