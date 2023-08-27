import c419 from '../../static/c418.jpg'

function PlaySound() {
  return <div className="hover:bottom-5 transition-[bottom] duration-200 text-white w-64 fixed bottom-4 right-4 border-sky-100/10 border rounded-xl bg-slate-950/70 flex gap-3 overflow-hidden h-16">
    <img className="h-full"  src={c419} alt="" />
    <div className='justify-evenly flex flex-col'>
       <h1 className="font-bold text-lg">Now Playing</h1>
    <p className='text-white/70 font-thin text-sm'>c419</p>
    </div>
   
  </div>;
}

export default PlaySound;
