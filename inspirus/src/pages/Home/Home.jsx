import Hero from '../../components/hero/app'
import MovingText from '../../components/movingText/app'
import './style.module.css'

// function Hero() {
//   return <div>
//     <h1>Hello</h1>
//   </div>;
// }

function Home() {
    return <div>
      <Hero/>
      <MovingText/>
    </div>;
  }
  
export default Home;