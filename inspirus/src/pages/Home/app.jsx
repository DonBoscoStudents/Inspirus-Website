import Hero from "../../components/hero/app";
import MovingText from "../../components/movingText/app";
import "./style.module.css";
import NavBar from "../../components/navBar/app";
import PlaySound from "../../components/playSound/app";
import Events from "../../components/events/app";

function Home() {
  return (
    <div className="bg-primary text-textColor">
      <NavBar />
      <PlaySound />
      <div className="pt-10">
        <Hero />
      </div>
      <MovingText />
      <Events />
    </div>
  );
}

export default Home;
