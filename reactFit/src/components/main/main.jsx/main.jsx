import Banner from "../banner/banner";
import style from "./style.module.css";
import Motivation from "../motivation/motivation";
import Trainin from "../training/training";

const MainBody = () => {
  return (
    <main className={style.content}>
      <h1 className={style.visually_hidden}>Kropp Fitness Club</h1>
      <Banner />
      <Motivation />
      <Trainin />
    </main>
  );
};

export default MainBody;
