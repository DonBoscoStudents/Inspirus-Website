import c419 from '../../static/c418.jpg'
import './playSound.css'
import  MinecraftMusic from '../../static/Audio/Minecraft.mp3'
import {Play,Prev,Next, Pause} from '../icons'
import { useState } from 'react'
const Music = new Audio(MinecraftMusic)



function Waveform(){
  return(
    <div id='waveform' >
      <div className='bg-textColor'></div>
      <div className='bg-textColor'></div>
      <div className='bg-textColor'></div>
    </div>
  )
}


// function PauseMusic(){
//   const [paused,setPaused]=useState()
//   setPaused(1)
// }

function PlaySound() {

  let [paused,setPaused]=useState(0)
  function pauseMusic(){
    setPaused(prevState=>!prevState)
    paused?Music.pause():Music.play()
  }
  return<div className='fixed bottom-4 right-4 flex flex-col gap-0.5 '> 


  <div className="text-textColor w-64 h-16   rounded-t-xl bg-primary-2 flex gap-3 overflow-hidden ">
    <img className="h-full"  src={c419} alt="" />
    <div className='justify-evenly flex flex-col'>
       <h1 className="font-bold text-lg">Now Playing </h1>

    <div className='text-textColor/20 font-thin text-sm flex items-center gap-2'>c419 <Waveform/></div>
    </div>
  </div>
  <div id='player' className='text-textColor w-64 h-12   rounded-b-xl bg-primary-2 flex gap-3 overflow-hidden text items-center justify-center'>
  <button><Prev/></button>
  <button onClick={
    pauseMusic
  }>
    {paused?<Pause/>:<Play/>}
  </button>
  <button><Next/></button>

  </div>
  </div>;
}



export default PlaySound;
