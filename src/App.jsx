import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0); 
  useEffect(() => {
    const timer = setTimeout(() => {
      if(count < 100) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearTimeout(timer);
        window.location.href = '/inspirus-page';  // open new page
      }
    }, 100);
  
    return () => clearTimeout(timer);  
  }, [count]);
  

  return (
    <>
    <div className='mt-48 cursor-wait'>
      <h1 className="sm:text-9xl  text-5xl text-center font-minecraft text-white my-4">INSPIRUS</h1>
      <div>
        
        
       
        <div className="w-full h-4 rounded-sm border ">
          <div className="h-4 rounded-sm bg-white" style={{ width: `${count}%` }}></div>
        </div>
        
      </div>
      </div>
    </>
  );
}

export default App;
