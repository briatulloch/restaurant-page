function displayMenu(){
    const menuContent=document.createElement('div');
    menuContent.classList.add('menu-content');

    const cupcake=document.createElement('div');
    const cupcakeTitle=document.createElement('h3');
    cupcakeTitle.textContent='Cupcake';
    cupcake.appendChild(cupcakeTitle);

    menuContent.appendChild(cupcake);

    const content=document.getElementById('content');
    content.appendChild(menuContent);
}

export default displayMenu