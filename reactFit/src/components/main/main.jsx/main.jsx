import Banner from "../banner/banner";
import style from "./style.module.css";
import Motivation from "../motivation/motivation";
import TraininAll from "../training/training";

const MainBody = () => {
  return (
    <main className={style.content}>
      <h1 className={style.visually_hidden}>Kropp Fitness Club</h1>
      <Banner />
      <Motivation />
      <TraininAll />
    </main>
  );
};

export default MainBody;
