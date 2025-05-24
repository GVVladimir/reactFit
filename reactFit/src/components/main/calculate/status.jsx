import style from "./style.module.css";

const StatusCalculate = () => {
  return (
    <div className={style.calculate_table_wrapper}>
      <table className={style.calculate_table}>
        <thead>
          <tr>
            <th>BMI</th>
            <th>Weight status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30.0 - and Above</td>
            <td>Obese</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <b>BMR</b> Metabolic Rate / <b>BMI</b> Body Mass Index
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StatusCalculate;
