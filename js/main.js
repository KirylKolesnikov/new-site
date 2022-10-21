const menuBtn = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu-list')

const body = document.body



if(menuBtn && menu) {
  menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
  })
  menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
  menu.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', () =>{
      menuBtn.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})




AOS.init()

$(function(){
    $('.rev-slide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // Адаптив
          
        ]
      });
})



