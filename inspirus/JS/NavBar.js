

const NavBar= document.createElement('div')

NavBar.innerHTML=`
<button><span class="material-symbols-outlined">
arrow_back
</span></button>
<div>
<a>Home</a>
<a>Team</a>
</div>
<button><span class="material-symbols-outlined">
light_mode
</span></button>
`

NavBar.classList.add('nav')
document.body.appendChild(NavBar)