console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageTransitionOut, pageTransitionIn, contentAnimation, updateMenu, initSearch } from './partials';

gsap.registerPlugin(ScrollTrigger);

const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const siteHeader = document.querySelector('.site-header')
const testimonialSlider = document.querySelector('.testimonials-swiper')
const resourcesSlider = document.querySelector('.resources-swiper')

if (document.body.contains(testimonialSlider)) {
  var testimonialsSwiper = new Swiper('.testimonials-swiper', {
    grabCursor: true,
    setWrapperSize: true, 
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 32
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 32
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })
}

if (document.body.contains(resourcesSlider)) {
  var resourcesSwiper = new Swiper('.resources-swiper', {
    grabCursor: true,
    setWrapperSize: true, 
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 32
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 32
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })
}

const mobileMenuHeight = mobileMenu.getBoundingClientRect().height

mobileMenu.style.height = 0

let scrollState = 0;

var scrollTop = function() {
  return window.scrollY;
};

var scrollDetect = function(collapse, expand) {
  var currentScroll = scrollTop();
  if (currentScroll > scrollState) {
    collapse();
  } else {
    expand();
  }
  scrollState = scrollTop();
};

function collapseNav() {
  siteHeader.classList.remove('expand');
  siteHeader.classList.add('collapse');
}

function expandNav() {
  siteHeader.classList.remove('collapse');
  siteHeader.classList.add('expand');
}

window.addEventListener("scroll", function() {
  scrollDetect(collapseNav, expandNav);
});

hamburger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
    const mobileMenuWrapperHeight = mobileMenuWrapper.getBoundingClientRect().height

    mobileMenu.style.height = 0

    if(mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open mobile menu')
        mobileMenu.classList.remove('nav-open')
        mobileMenu.style.height = 0
        hamburger.classList.remove('is-active')
    } else {
        mobileMenu.classList.add('nav-open')
        mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
        hamburger.classList.add('is-active')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close mobile menu')
    }
}

initSearch()

function fadeInContent() {
    const introSection = document.querySelector(".intro-section");
    const fadeWrapper = document.querySelector(".fade-wrapper .container");
    const fadeUp = document.querySelectorAll(".fade-up");
    const blog = document.querySelector(".blog-container");

    gsap.utils.toArray(fadeUp).forEach((fade) => {
        gsap.from(fade, {
            opacity: 0,
            y: 20,
            duration: .5,
            ease: 'Power2.in',
            scrollTrigger: {
                trigger: fade,
                toggleActions: "play none none reset",
            }
        })
    });
    if (document.body.contains(fadeWrapper)) {
        gsap.from(fadeWrapper, {
            opacity: 0,
            y: 20,
            duration: .5,
            ease: 'Power2.in',
            delay: .5,
            scrollTrigger: {
                trigger: fadeWrapper,
                start: "top bottom-=25",
                toggleActions: "play none none reset",
            }
        });
    }
}

function initZoom() {
    const zoomImages = document.querySelectorAll(".zoom-image");
    gsap.utils.toArray(zoomImages).forEach((section) => {
        const image = section.querySelector('img');
        gsap.to(image, {
            scale: 1.1,
            scrollTrigger: {
                trigger: section,
                scrub: true,
            }
        })
    });
}

function homepageAnimations() {
    fadeInContent();
    initZoom();
}