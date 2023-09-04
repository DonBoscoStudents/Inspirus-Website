import EventCard from '../eventCards/app'
import {Link} from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const EventsDict= [
    {
      "name": "Inspirathon",
      "description": "An inspiring computer event that..."
    },
    {
      "name": "Incarnate",
      "description": "A cutting-edge computer event focused on..."
    },
    {
      "name": "Retrieval Sages",
      "description": "Join the retrieval experts in this computer event..."
    },
    {
      "name": "Framed",
      "description": "Experience the world of computer graphics in the Framed event..."
    },
    {
      "name": "Codeplay",
      "description": "Codeplay: Where coding becomes a thrilling adventure..."
    },
    {
      "name": "Exquizite",
      "description": "An exquisite computer event for tech enthusiasts..."
    },
    {
      "name": "Code Wars",
      "description": "Engage in epic coding battles at the Code Wars event..."
    },
    {
      "name": "Jigsaw Coding",
      "description": "Solve coding puzzles and piece together your skills..."
    },
    {
      "name": "Mind Games",
      "description": "Mind-bending challenges await at the Mind Games computer event..."
    },
    {

      "name": "Reel It Feel It",
      "description": "Create captivating computer-generated ads in this event..."
    },
    {
      "name": "Leisure Lounge",
      "description": "Relax and enjoy tech talks at the Leisure Lounge computer event..."
    },
    {
      "name": "Memes",
      "description": "Explore the world of internet humor and memes at this event..."
    },
    {
      "name": "Rubix Cube",
      "description": "Solve virtual Rubik's Cubes and compete in this computer event..."
    },
    {
      "name": "Capture the flag",
      "description": "A thrilling computer event where you'll aim to capture the digital flag..."
    }
  ]



function Events() {
  const colors = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
  return <div className='flex flex-col items-center mt-10'>
    <div className='w-[90%] md:w-[90%] lg:w-[80%] flex flex-col'>
    <h1 className='text-3xl md:text-5xl md:self-center md:mb-8 font-IBMPlexSerif font-bold' >The Events</h1>
    <div className='flex gap-3 md:grid md:grid-cols-2  lg:grid-cols-3 flex-wrap place-items-center'>
    {EventsDict.map((event, index) => (
        <Link key={index} to={`/Events/${event['name'].toLowerCase().replaceAll(' ','')}`}>
          <EventCard style={{ background: `var(--${colors[index % colors.length]})` }} name={event.name} description={event.description} />
        </Link>
      ))}
    </div>
    </div>
  </div>;
}


export default Events;
