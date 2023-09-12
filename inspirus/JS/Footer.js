
const Footer= document.createElement('div')

Footer.innerHTML=`<div class="relative">
<h1 class="font-black font-rubik text-3xl mb-2">Our Sponsors</h1>
<div class="grid grid-cols-2 gap-2  pr-2">
  <a href="https://oneshield.com/"><img class="h-full p-3 aspect-auto"
      src="/Assets/Sponsors/OneShield2.svg" alt=""></a>

  <a href="https://www.tersusenergy.io/">
    <img class="h-full p-3" style='filter:drop-shadow(2px 1px 2px #04040488);' src="/Assets/Sponsors/Tersus.svg" alt="">

  </a>
  <a href="https://conexaotechsolutions.com/">
    <img class="h-full p-3"  src="/Assets/Sponsors/Conexao.jpg" alt="">

  </a>
</div>
<div class="absolute bottom-2 font-thin">
  <a href="https://www.instagram.com/inspirusdbce/">Instagram</a>
  <a href="https://www.facebook.com/inspirusdbce">Facebook</a>
  <a href="https://twitter.com/inspirus_dbce">Twitter</a>

</div>
</div>
<div><iframe title="Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.5562037216996!2d73.96689591435725!3d15.291979163859711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1631736de9d%3A0x980720b4516a7a5!2sDon%20Bosco%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1670427168557!5m2!1sen!2sin"
  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`


Footer.classList.add('footer')
document.body.appendChild(Footer)


