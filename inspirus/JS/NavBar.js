
const NavBar= document.createElement('div')

NavBar.innerHTML=`
<button onclick="history.back()"><span class="material-symbols-outlined">
arrow_back
</span></button>
<div>
<a href='/'>Home</a>
<a href='/Pages/Team/' >Team</a>
</div>
<div>
<i id="Quotes">Inspirus 7</i>
<button onclick="ChangeColorMode()"><span class="material-symbols-outlined">
light_mode
</span></button>
</div>
`

const Quotes=[
  "GameJam or Mango Jam",
  "Potatoes",
  "0010110",
  '𐊪𐋎𐊆𐊋𐋇𐊀𐋃𐊄𐋏'
]

NavBar.classList.add('nav')
document.body.appendChild(NavBar)

document.getElementById('Quotes').innerText=Quotes[Math.floor(Math.random()*Quotes.length)]

window.onload=SetColorMode

  let isDarkMode = true
  function SetColorMode(){
    if(window.localStorage.getItem('color-scheme')=='dark'){
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      isDarkMode=true

    }else if(window.localStorage.getItem('color-scheme')=='light'){
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      isDarkMode=false

    }else{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.body.classList.add('dark')
            isDarkMode=true
          }else{
            document.body.classList.add('light')
            isDarkMode=false
          }
    }
  }
  function ChangeColorMode(){
    isDarkMode=!isDarkMode
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    if(isDarkMode){
      window.localStorage.setItem('color-scheme','dark')
        console.log(window.localStorage)
    }else{
      window.localStorage.setItem('color-scheme','light')
      console.log(window.localStorage)

    }
  }