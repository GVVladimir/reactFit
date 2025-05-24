import FormCalculate from "./form.jsx";
import StatusCalculate from "./status.jsx";
import style from "./style.module.css";
import cx from "classnames";

const CalculateBlock = () => {
  return (
    <section className={style.calculate}>
      <div className={cx(style.calculate_inner, style.container)}>
        <FormCalculate />
        <StatusCalculate />
      </div>
    </section>
  );
};

export default CalculateBlock;
