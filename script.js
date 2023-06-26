window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbarOffsetTop = navbar.offsetTop;
  
    if (window.pageYOffset > navbarOffsetTop) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  