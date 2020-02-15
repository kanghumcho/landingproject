/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navElements = document.querySelectorAll('section')
const navigateto = document.getElementById('navbar__list')
const mainNavLinks = document.querySelectorAll("nav")

/**
 * End Global Variables
 * Start Helper Functions
 * I am confused?
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navElements.forEach(elem => {
    const navElementlist = `<li class='menu__link ${elem.className}' data-link=${elem.id}><a href="#${elem.id}">${elem.dataset.nav}</li>`
    navigateto.insertAdjacentHTML('beforeend', navElementlist)
})

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
const addact = entries => {
    entries.forEach(entry => {
        const navElementList = document.querySelector(`.menu__link[data-link='${entry.target.id}']`,)
        const section = document.getElementById(entry.target.id)

        if (entry && entry.isIntersecting) {
            navElementList.classList.add("active")
            section.classList.add("active")
        } else {
            if (navElementList.classList.contains("active")) {
                navElementList.classList.remove("active")
            }

            if(section.classList.contains("active")) {
                section.classList.remove("active")
            }
        }
    })
}
 */

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    navElements.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        mainNavLinks.find('a').removeClass('active');
        navElements.removeClass('active');
        
        $(this).addClass('active');
        mainNavLinks.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

navigateto.addEventListener('click', event => {
    event.preventDefault()
    const parent = event.target.hasAttribute('data-link')
      ? event.target
      : event.target.parentElement
    const elementToScrollTo = document.getElementById(parent.dataset.link)
    elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'})
})

// Set sections as active

const observer = new IntersectionObserver(addact)
navElements.forEach(elem => {
  observer.observe(document.getElementById(elem.id))
})

