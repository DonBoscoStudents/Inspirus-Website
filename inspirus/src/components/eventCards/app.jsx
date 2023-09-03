import './eventCard.css'
function EventCard(props) {
  return <div className='eventCard relative overflow-hidden aspect-[1.85] w-[22rem] p-3 hover:scale-105 transition' {...props}>
    <h1 className="z-1 font-rubik font-black text-3xl">{props.name}</h1>
    <p className="z-1 text-poppins">{props.description}</p>
    <img className="" src="/src/assets/sparkle.gif" alt="" />
  </div>;
}

export default EventCard;
