//////////////////////////////////////////////
//// Glide js 
var glide = new Glide('.glide', {
    autoplay: 2000,
    hoverpause: false,
    type: 'carousel',
    //gap:10,
    breakpoints: {
      2024: {
        perView:4, 
        gap:10,
      },
      1000: {
        perView: 3,
        gap:5,
      },
      800: {
        perView: 2,
        gap:5,
      },
      600: {
        perView: 1,
        gap:5,
      }
    }
    
  })
  
  glide.mount()

  //////////////////////////////////////////////////
  //////// Typewriter JS
  new Typewriter('#typewriter', {
    strings: [`The World's Largest Selection of Courses`],
    autoStart: true,
    loop: true,
    cursor:'..',
    deleteSpeed:'natural',
    delay:100

  });

//////// MANU OPEN

let menuicon = document.querySelector('.menu-bars').addEventListener('click',()=>{
    document.querySelector('.menu-nav').classList.toggle('show-nav');
})


let menuitems = Array.prototype.slice.call(document.querySelectorAll('.menuitem'),0);
menuitems.forEach(mitem => {
    mitem.addEventListener('click',()=>{
        document.querySelector('.menu-nav').classList.remove('show-nav');
    })
});

window.addEventListener("scroll",()=>{
    

    if(window.scrollY>window.innerHeight){
        document.querySelector('.header').classList.add('header2');
       
    }else{
        document.querySelector('.header').classList.remove('header2');
    }
})
