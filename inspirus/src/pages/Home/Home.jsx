import Hero from '../../components/hero/app'
import MovingText from '../../components/movingText/app'
import './style.module.css'
import NavBar from '../../components/navBar/app'
import PlaySound from '../../components/playSound/app'


function Home() {
    return <div className='bg-primary text-textColor'>
      <NavBar/>
      <PlaySound/>
      <Hero/>
      <MovingText/>

    </div>;
  }
  
export default Home;