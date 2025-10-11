// שמות הקבצים כפי שמצאנו בארכיב שלך.
const images = [
'images/arms.png',
'images/Back.png',
'images/Belly.png',
'images/cheeks.png',
'images/chin.png',
'images/elbows.png',
'images/eyebrows.png',
'images/eyelids.png',
'images/eyes.png',
'images/facial skin.png',
'images/forehead.png',
'images/hair.png',
'images/lips.png',
'images/neck.png',
'images/nose.png',
'images/shoulders.png',
'images/teeth.png',
'images/tit-chest.png',
'images/Waistline.png'
];


const grid = document.getElementById('grid');
const template = document.getElementById('tile-template');


images.forEach((src, idx) => {
const node = template.content.cloneNode(true);
const tile = node.querySelector('.tile');
const img = node.querySelector('.tile-img');
const title = node.querySelector('.tile-title');
const menuBtn = node.querySelector('.menu-btn');
const menu = node.querySelector('.menu');


img.src = src;
img.alt = src;
// extract filename without extension for title
const base = src.split('/').pop();
const label = base.replace(/\.[^/.]+$/, "");
title.textContent = label;


// toggle menu
menuBtn.addEventListener('click', (e) => {
e.stopPropagation();
// hide other menus
document.querySelectorAll('.menu').forEach(m=>{ if(m!==menu) m.hidden=true });
menu.hidden = !menu.hidden;
});


// each menu item opens a new page (page1.html / page2.html / page3.html)
menu.querySelectorAll('.menu-item').forEach((btn, i) => {
btn.addEventListener('click', (ev) => {
ev.stopPropagation();
const target = btn.dataset.page || `page${i+1}.html`;
// open new tab/window — you can edit the pages later
window.open(target, '_blank');
});
});


// close menu when clicking outside
document.addEventListener('click', ()=>{ menu.hidden=true });


grid.appendChild(node);
});
