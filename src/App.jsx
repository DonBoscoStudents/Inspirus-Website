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
        window.location.href = '/Home';  // open new page
      }
    }, 20);
  
    return () => clearTimeout(timer);  
  }, [count]);
  

  return (
    <>
    <div className='mt-48'>
      <h1 className="sm:text-8xl  text-7xl text-center font-minecraft text-white my-28">INSPIRUS</h1>
      <div className='flex justify-center'>
        <div className="w-[80%] p-[2px] h-[34px]  rounded border flex items-center justify-start">
          <div className="h-[28px] rounded bg-white" style={{ width: `${count}%` }}></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
