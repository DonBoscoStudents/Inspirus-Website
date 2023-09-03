import Line1 from './Row1.png';
import Line2 from './Row2.png';
import './App.css';

function MovingText() {
  return (
    <div className="wrapper">
      <div className="MovingText">
        <div className="Move">
          <img src={Line1} className="Move-Right" alt="" />
          <img src={Line1} className="Move-Right" alt="" />
          <img src={Line1} className="Move-Right" alt="" />
        </div>
        <div className="Move">
          <img src={Line2} className="Move-Left" alt="" />
          <img src={Line2} className="Move-Left" alt="" />
          <img src={Line2} className="Move-Left" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovingText;