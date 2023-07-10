'use strict';
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');

function toggleNav() {
  menuBars.classList.toggle('change');
  // Toggle Overlay/Navigation
  overlay.classList.toggle('overlay-active');
  if(overlay.classList.contains('overlay-active')) {
    overlay.classList.add('overlay-slice-right');
    overlay.classList.remove('overlay-slice-left');
  } else {
    overlay.classList.add('overlay-slice-left');
    overlay.classList.remove('overlay-slice-right');
  }
}



menuBars.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav2.addEventListener('click',toggleNav);
nav3.addEventListener('click',toggleNav);
nav4.addEventListener('click',toggleNav);