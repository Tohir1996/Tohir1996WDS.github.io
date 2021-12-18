//Navbar fixed
let navbar = document.querySelector('.navbar');
let scrollUp = document.querySelector('.scrollUp');

// Active menu
let navLink = document.querySelectorAll('.nav-link');

// Burger menu
const menuBtn = document.querySelector('.menu-btn');
let navItems = document.querySelector('.navbar-nav');
let menuOpen = false;



//Navbar fixed
window.addEventListener('scroll', function (e) {
    let scrollY = pageYOffset;
    if (scrollY > 10) {
        navbar.style.background = 'rgba(196, 196, 196, 1)';
        navbar.style.boxShadow = '(0px 10px 16px rgba(196, 196, 196, 0.50))';
        scrollUp.style.display = 'flex';
    }
    else {
        navbar.style.background = 'rgba(196, 196, 196, 0.438)';
        scrollUp.style.display = 'none';
    }
})

// Active menu
for (var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function () {
        for (var k = 0; k < navLink.length; k++) {
            navLink[k].classList.remove('active');
            menuBtn.classList.remove('open');
            navItems.classList.remove('open-item');
        }
        this.classList.add('active');
        return false;
    });
}

// Burger menu
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navItems.classList.add('open-item');
        navbar.style.background = 'rgba(196, 196, 196, 1)';
        navbar.style.boxShadow = '(0px 10px 16px rgba(196, 196, 196, 0.50))';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navItems.classList.remove('open-item');
        let scrollY = pageYOffset;
        if (scrollY > 10) {
            navbar.style.background = 'rgba(196, 196, 196, 1)';
            navbar.style.boxShadow = '(0px 10px 16px rgba(196, 196, 196, 0.50))';
            scrollUp.style.display = 'flex';
        }
        else {
            navbar.style.background = 'rgba(196, 196, 196, 0.438)';
            scrollUp.style.display = 'none';
        }
    }
});

// Link in portfolio
let cards = document.querySelectorAll('.portfolio-samples__card');

for (let a = 0; a < cards.length; a++){
    cards[a].onmouseover = function () {
        cards[a].classList.add('active');
    };
    cards[a].onmouseout = function () {
        cards[a].classList.remove('active');
    }

};