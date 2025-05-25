import style from "./style.module.css";
import cx from "classnames";
import one from "../../../images/motivation/1.jpg";
import two from "../../../images/motivation/2.jpg";



const Motivation = () => {

  return (
    <section className={style.motivation}>
      <h2 className={style.visually_hidden}>Motivation</h2>
      <ul className={style.motivation_list}>
        <li className={style.motivation_item}>
          <div className={cx(style.motivation_card, style.container)}>
            <div className={style.motivation_card_body}>
              <h3
                className={cx(
                  style.motivation_card_title,
                  style.backdrop_title,
                  style.title_medium
                )}
                data-title="Strong"
              >
                Be you, just stronger! <br />
                Power is in you
              </h3>
              <div className={style.motivation_card_description}>
                <p>
                  Unum solum justo ex ius. Pro cu probo laboramus eius insolens
                  euripidis te eos, ut agam tota.
                </p>
              </div>
              <a
                href="/"
                className={cx(
                  style.motivation_card_button,
                  style.button,
                  style.transparent
                )}
              >
                View more
              </a>
            </div>
            <img
              src={one}
              alt="A man pulling himself up on a horizontal bar"
              className={style.motivation_card_image}
              width="518"
              height="760"
              loading="lazy"
            />
          </div>
        </li>
        <li className={style.motivation_item}>
          <div className={cx(style.motivation_card, style.container)}>
            <div className={style.motivation_card_body}>
              <h3
                className={cx(
                  style.motivation_card_title,
                  style.backdrop_title,
                  style.title_medium
                )}
                data-title="Start"
              >
                Today is the best <br />
                day to start!
              </h3>
              <div className={style.motivation_card_description}>
                <p>
                  Sed abhorreant constituam consectetuer eu. At mei clita
                  deserunt, his movet molestie nemore.
                </p>
              </div>
              <a
                href="/"
                className={cx(
                  style.motivation_card_button,
                  style.button,
                  style.transparent
                )}
              >
                View more
              </a>
            </div>
            <img
              src={two}
              alt="Man with dumbbells"
              className={style.motivation_card_image}
              width="518"
              height="760"
              loading="lazy"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Motivation;
