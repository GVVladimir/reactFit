import Banner from "../banner/banner";
import style from "./style.module.css";
import Motivation from "../motivation/motivation";
import TraininAll from "../training/training";
import JoinUs from "../joinUs/join";
import Location from "../location/location";
import Family from "../family/family";
import CalculateBlock from "../calculate/calculateBlok";
import Footer from "../../footer/footer";

const MainBody = () => {
  return (
    <main className={style.content}>
      <h1 className={style.visually_hidden}>Kropp Fitness Club</h1>
      <Banner />
      <Motivation />
      <TraininAll />
      <JoinUs/>
      <Location/>
      <Family/>
      <CalculateBlock/>
      <Footer/>
    </main>
  );
};

export default MainBody;
