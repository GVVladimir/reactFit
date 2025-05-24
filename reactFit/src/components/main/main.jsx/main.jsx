import Banner from "../banner/banner";
import style from "./style.module.css";
import Motivation from "../motivation/motivation";
import TraininAll from "../training/training";
import JoinUs from "../joinUs/join";
import Location from "../location/location";

const MainBody = () => {
  return (
    <main className={style.content}>
      <h1 className={style.visually_hidden}>Kropp Fitness Club</h1>
      <Banner />
      <Motivation />
      <TraininAll />
      <JoinUs/>
      <Location/>
    </main>
  );
};

export default MainBody;
