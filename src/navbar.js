function createHeader(){

	const headerDiv = document.createElement('div');
	headerDiv.classList.add('header-container');
	const header = document.createElement('header');

	const titleDiv = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'Tasty Treats';
	
    titleDiv.appendChild(title);
    
    const image = document.createElement('img');
    image.src = 'images/cupcake-icon.png';
    image.setAttribute("id","icon");

    title.appendChild(image);


	const navbar = document.createElement('nav');
	const navlist = document.createElement('ul');

	const navItemsHome = document.createElement('li');
	navItemsHome.textContent = 'Home';
	navItemsHome.setAttribute("id", "home");
	navlist.appendChild(navItemsHome);

	const navItemsMenu = document.createElement('li');
	navItemsMenu.textContent = 'Menu';
	navItemsMenu.setAttribute("id", "menu");
	navlist.appendChild(navItemsMenu);

	const navItemsAbout = document.createElement('li');
	navItemsAbout.textContent = 'Contact';
	navItemsAbout.setAttribute("id","contact");
	navlist.appendChild(navItemsAbout);

	navbar.appendChild(navlist);
	header.appendChild(titleDiv);
	header.appendChild(navbar);
	headerDiv.appendChild(header);

	const navcontent = document.getElementById('navcontent')

	navcontent.appendChild(headerDiv);
	
}

export default createHeader