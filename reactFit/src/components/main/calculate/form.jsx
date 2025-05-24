import style from "./style.module.css";
import cx from "classnames";

const FormCalculate = () => {
  return (
    <div className={style.calculate_body}>
      <h2
        className={cx(
          style.calculate_title,
          style.title_medium,
          style.backdrop_title
        )}
        data-title="BMI"
      >
        Input your BMI
      </h2>
      <div className={style.calculate_description}>
        <p>
          Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam
          no nemore epicurei
        </p>
      </div>
      <form className={style.calculate_form}>
        <div className={style.calculate_form_body}>
          <label className={style.visually_hidden} htmlFor="height">
            Height
          </label>
          <input
            className={cx(style.calculate_input, style.input)}
            id="height"
            type="number"
            placeholder="Height / cm"
          />

          <label className={style.visually_hidden} htmlFor="weight">
            Weight
          </label>
          <input
            className={cx(style.calculate_input, style.input)}
            id="weight"
            type="number"
            placeholder="Weight / kg"
          />
          <label className={style.visually_hidden} htmlFor="age">
            Age
          </label>
          <input
            className={cx(style.calculate_input, style.input)}
            id="age"
            type="number"
            placeholder="Age"
          />
          <label className={style.visually_hidden} htmlFor="gender">
            Gender
          </label>
          <select
            className={cx(style.calculate_input, style.input)}
            id="gender"
            required
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="male">Man</option>
            <option value="female">Woman</option>
          </select>

          <label className={style.visually_hidden} htmlFor="activity-factor">
            Activity factor
          </label>
          <select
            className={cx(style.calculate_input, style.input, style.wide)}
            id="activity-factor"
            required
          >
            <option value="" disabled selected>
              Select an activity factor
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button
          className={cx(
            style.calculate_button,
            style.button,
            style.transparent
          )}
          type="submit"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};
export default FormCalculate;
