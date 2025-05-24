import style from "./style.module.css";
import cx from "classnames";
import allTrainings from "../../../data/trainin.json";
import "../../../App.css";
import "../../../index.css";

// import one from "../../../images/training-types/1.svg";
// import two from "../../../images/training-types/2.svg";
// import three from "../../../images/training-types/3.svg";
// import four from "../../../images/training-types/4.svg";
// import five from "../../../images/training-types/5.svg";
// import six from "../../../images/training-types/6.svg";

const TraininAll = () => {
  return (
    <section className={cx(style.training_types, style.container_wide)}>
      <h2 className={style.visually_hidden}>Types of training</h2>
      <ul className={style.training_types_list}>
        {allTrainings.map((trainin) => {
          return (
            <li key={trainin.id} className={style.training_types_item}>
              <img
                src={trainin.imgUrl}
               
                className={style.training_types_image}
                width="150"
                height="140"
                loading="lazy"
              />
              <h3 className={style.training_types_item_title}>
                {trainin.name}
              </h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TraininAll;

{
  /* <li className={style.training_types_item}>
            <img
              src={two}
              alt=""
              className={style.training_types_image}
              width="150"
              height="140"
              loading="lazy"
            />
            <h3 className={style.training_types_item_title}>aron gym</h3>
          </li>
          <li className={style.training_types_item}>
            <img
              src={three}
              alt=""
              className={style.training_types_image}
              width="150"
              height="140"
              loading="lazy"
            />
            <h3 className={style.training_types_item_title}>fit & tone</h3>
          </li>
          <li className={style.training_types_item}>
            <img
              src={four}
              alt=""
              className={style.training_types_image}
              width="150"
              height="140"
              loading="lazy"
            />
            <h3 className={style.training_types_item_title}>forza</h3>
          </li>
          <li className={style.training_types_item}>
            <img
              src={five}
              alt=""
              className={style.training_types_image}
              width="150"
              height="140"
              loading="lazy"
            />
            <h3 className={style.training_types_item_title}>balance fitness</h3>
          </li>
          <li className={style.training_types_item}>
            <img
              src={six}
              alt=""
              className={style.training_types_image}
              width="150"
              height="140"
              loading="lazy"
            />
            <h3 className={style.training_types_item_title}>body sculpt</h3>
          </li> */
}
