import header from './navbar';
import displayHome from './home';
import displayMenu from './menu';
import displayContact from './contact';



header();
displayHome();

let content=document.getElementById('content');

let home=document.getElementById('home');
home.addEventListener('click', ()=>{
    content.textContent='';
    displayHome();
});

let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
	content.textContent = '';
	displayMenu();
});

let contact=document.getElementById('contact');
contact.addEventListener('click',()=>{
    content.textContent='';
    displayContact();
});