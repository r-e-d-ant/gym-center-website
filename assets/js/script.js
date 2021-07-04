
const navbar = document.querySelector('.navbar');
const openMenuIcon = document.querySelector('.bx-menu');
const closeMenuIcon = document.querySelector('.bx-x');
const gymName = document.querySelector('.gym__name_container');


// -- OPEN MENU --

openMenuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('show_d_flex')){
        navbar.classList.remove('show_d_flex');
        openMenuIcon.classList.remove('hide');
        gymName.classList.remove('show_d_block');
    }else {
        navbar.classList.add('show_d_flex');
        openMenuIcon.classList.add('hide');
        gymName.classList.add('show_d_block');
    }
})

// -- CLOSE MENU --

closeMenuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('show_d_flex')){
        navbar.classList.remove('show_d_flex');
        openMenuIcon.classList.remove('hide');
        gymName.classList.remove('show_d_block');
    }
})

// -- load images when reach at their place --
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
