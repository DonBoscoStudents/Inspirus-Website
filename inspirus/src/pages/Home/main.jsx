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
    </div>;
  }
  
export default Home;