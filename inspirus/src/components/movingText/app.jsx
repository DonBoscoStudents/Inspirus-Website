import './movingText.css'

function MovingText(props) {
  
  return <div className="overflow-hidden">
    <h1 className="t1 font-IBMPlexSerif font-black text-[12em] -mb-32">{props['text'].replaceAll(' ','').repeat(100)}</h1>
    <h1 className="t2 font-ElegantoSans font-thin text-[8em]">{props['text'].replaceAll(' ','').repeat(100)}</h1>
  </div>;
}

export default MovingText;
