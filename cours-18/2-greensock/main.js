import { gsap } from './node_modules/gsap/all.js';
//import { gsap } from 'gsap';


/**
 * Tween au clic d'un bouton
 */
let elBox = document.querySelector('[data-js-box]'),
    elParent = elBox.parentNode;

let tweenBox = gsap.to(elBox, {
    duration: 4, 
    x: elParent.offsetWidth - 50,
    rotation: 360, 
    ease: 'none', 
    paused: true
});
   
let elGsapActions = document.querySelector('[data-js-gsap]');

elGsapActions.addEventListener('click', function(e) {
    let dataset = e.target.dataset.jsGsapAction;

    if (dataset == 'play') tweenBox.play();
    if (dataset == 'pause') tweenBox.pause();
    if (dataset == 'resume') tweenBox.resume();
    if (dataset == 'reverse') tweenBox.reverse();
    if (dataset == 'restart') tweenBox.restart();
});




/**
 * Tween à l'intersection d'un élément
 */

let elIntersection = document.querySelector('[data-js-intersection]'),
    elIntersectionBg = elIntersection.querySelector('[data-js-intersection-bg]'),
    direction = 'bas';

let tweenIntersection = gsap.to(elIntersectionBg, {
    duration: 4, 
    width: elParent.offsetWidth,
    ease: 'none', 
    paused: true
});

const config = {
    root: null,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

let observer = new IntersectionObserver((entries, observer) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {

            console.log('is intersecting');
            console.log(direction);

            if (direction == 'bas') tweenIntersection.play();
            else if (direction == 'haut') tweenIntersection.reverse();
            
        } else {

            console.log('is not intersecting');
            
            tweenIntersection.pause();
        }
    }
}, config);
  
observer.observe(elIntersection);




/**
 * Indique la direction du scroll (haut / bas)
 * ref : https://stackoverflow.com/questions/31223341/detecting-scroll-direction
 */
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        //console.log('bas')
        direction = 'bas';
    } else {
        //console.log('haut')
        direction = 'haut';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});