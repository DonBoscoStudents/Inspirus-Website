
const NavBar= document.createElement('div')

NavBar.innerHTML=`
<button onclick="history.back()">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.425 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z"/></svg>
</button>
<div class='pages'>
<h1 class='font-black font-rubik text-xl'></h1>

</div>
<button onclick="ChangeColorMode()" id="ColorModeICON">
</button>
`
// NavBar.innerHTML=`
// <button onclick="history.back()">
// <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.425 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z"/></svg>
// </button>
// <div class='pages'>
// <a href='/'>Home</a>
// <a href='/Pages/Team/' >Team</a>
// </div>
// <button onclick="ChangeColorMode()" id="ColorModeICON">
// </button>
// `
const LightMode =`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17ZM1 13v-2h4v2H1Zm18 0v-2h4v2h-4Zm-8-8V1h2v4h-2Zm0 18v-4h2v4h-2ZM6.35 7.75L3.875 5.275l1.4-1.4L7.75 6.35l-1.4 1.4Zm12.375 12.375L16.25 17.65l1.4-1.4l2.475 2.475l-1.4 1.4ZM17.65 7.75l-1.4-1.4l2.475-2.475l1.4 1.4L17.65 7.75ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4l-2.475 2.475Z"/></svg>`
const DarkMode =`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"/></svg>`




NavBar.classList.add('nav')
document.body.appendChild(NavBar)




window.onload=SetColorMode

  let isDarkMode = true
  function SetColorMode(){
    if(window.localStorage.getItem('color-scheme')=='dark'){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      isDarkMode=true
      document.getElementById('ColorModeICON').innerHTML=LightMode
    }else if(window.localStorage.getItem('color-scheme')=='light'){
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      isDarkMode=false
      document.getElementById('ColorModeICON').innerHTML=DarkMode

    }else{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.body.classList.add('dark')
            isDarkMode=true
            document.getElementById('ColorModeICON').innerHTML=LightMode
          }else{
            document.body.classList.add('light')
            isDarkMode=false
            document.getElementById('ColorModeICON').innerHTML=DarkMode
          }
    }
  }
  function ChangeColorMode(){
    isDarkMode=!isDarkMode
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    if(isDarkMode){
      window.localStorage.setItem('color-scheme','dark')
      document.getElementById('ColorModeICON').innerHTML=LightMode
        console.log(window.localStorage)
    }else{
      window.localStorage.setItem('color-scheme','light')
      document.getElementById('ColorModeICON').innerHTML=DarkMode
      console.log(window.localStorage)

    }
  }

////////// Adding Favicon

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '/public/Logo.svg';