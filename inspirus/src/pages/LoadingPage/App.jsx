import { useEffect, useState } from 'react';
import './App.css';
import '../../output.css'

function LoadingPage() {
  const [count, setCount] = useState(1); 

  useEffect(() => {
    setTimeout(()=>{
      setCount(100);
    },10)
    const timer = setTimeout(() => {
        clearTimeout(timer);
        // window.location.href = '/Home';  // Open new page
      }, 4000);

    return () => clearTimeout(timer);
  }, [count]);
  
  return (
    <>
    
    <div className='bg-[#3120F3] flex items-center flex-col h-screen justify-center gap-8'>
      <h1 className="sm:text-9xl  text-5xl text-center font-minecraft text-white my-4">INSPIRUS</h1>
      <div>
        <div className="w-[60vw] p-[3px] border-2 rounded-2xl">
          <div className="bar h-6  w-0 bg-white rounded-2xl" style={{ width: `${count}%` }}></div>
        </div>
      </div>
      </div>
    </>
  );
}



export default LoadingPage;
