import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(1); 
  const growthFactor = 2; 
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextCount = count * growthFactor;  // Predict the next count value
      if (nextCount <= 100) {
        setCount(nextCount);  // Only update count if it would not exceed 100
      } else {
        setCount(100);
        clearTimeout(timer);
        window.location.href = '/inspirus-page';  // Open new page
      }
    }, 200);

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
