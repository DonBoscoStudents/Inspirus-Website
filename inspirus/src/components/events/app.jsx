import EventCard from '../eventCards/app'
import {Link} from 'react-router-dom'


function Events() {
  return <div className='flex flex-col items-center'>
    <h1 >The Events</h1>
    <div className='grid gap-3 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
<Link to={'Events/Inspirathon'}>
<EventCard style={{background:'var(--c1)'}}/>
</Link>
<EventCard style={{background:'var(--c2)'}}/>
<EventCard style={{background:'var(--c3)'}}/>
<EventCard style={{background:'var(--c4)'}}/>
<EventCard style={{background:'var(--c5)'}}/>
<EventCard style={{background:'var(--c6)'}}/>
<EventCard style={{background:'var(--c1)'}}/>
<EventCard style={{background:'var(--c2)'}}/>
<EventCard style={{background:'var(--c3)'}}/>
<EventCard style={{background:'var(--c4)'}}/>
<EventCard style={{background:'var(--c5)'}}/>
<EventCard style={{background:'var(--c6)'}}/>
<EventCard style={{background:'var(--c1)'}}/>
<EventCard style={{background:'var(--c2)'}}/>

    </div>
  </div>;
}

export default Events;
