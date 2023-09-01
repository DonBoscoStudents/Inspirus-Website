import Hero from '../../components/hero/app'
import MovingText from '../../components/movingText/app'
import './style.module.css'
import NavBar from '../../components/navBar/app'


// function Hero() {
//   return <div>
//     <h1>Hello</h1>
//   </div>;
// }

function Home() {
    return <div className='bg-primary text-textColor'>
          <NavBar/>
      <Hero/>
      <MovingText/>

import PlaySound from '../../components/playSound/app'
import Events from '../../components/events/app'

function Home() {
    return <div className='bg-primary text-textColor'>
      <NavBar/>
      <PlaySound/>
      <Hero/>
      <MovingText/>
<Events/>

    </div>;
  }
  
export default Home;