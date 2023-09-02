import '../../output.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Inspirathon  from './Inspirathon/main'
const router = createBrowserRouter([
  {
    path:"Inspirathon",
    element:<Inspirathon/>
  },

])


function EventPage() {
    return <div className='bg-primary text-textColor'>
      <RouterProvider router={router} />
    </div>;
  }
  
export default EventPage;