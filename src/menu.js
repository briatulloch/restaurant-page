function displayMenu(){
    const menuTitle=document.createElement('h2');
    menuTitle.textContent='Menu';
    
    const menuContent=document.createElement('div');
    menuContent.classList.add('menu-content');

    const redvelvet=document.createElement('div');
    const redvelvetTitle=document.createElement('h3');
    redvelvetTitle.textContent='Red Velvet Cupcakes $2.99';
    const redvelvetImg=document.createElement('img');
    redvelvetImg.src="images/redvelvet.jpeg";
    redvelvetImg.setAttribute("id","redvelvet");
    redvelvet.appendChild(redvelvetTitle);
    redvelvet.appendChild(redvelvetImg);

    menuContent.appendChild(redvelvet);

    const lemonrasp=document.createElement('div');
    const lemonraspTitle=document.createElement('h4');
    lemonraspTitle.textContent='Lemon Raspberry Cupcakes $3.99';
    const lemonraspImg=document.createElement('img');
    lemonraspImg.src="images/lemon.jpeg";
    lemonraspImg.setAttribute("id","lemonrasp");
    lemonrasp.appendChild(lemonraspTitle);
    lemonrasp.appendChild(lemonraspImg);

    menuContent.appendChild(lemonrasp);


    const oreo=document.createElement('div');
    const oreoTitle=document.createElement('h5');
    oreoTitle.textContent='Oreo Cupcakes $3.99';
    const oreoImg=document.createElement('img');
    oreoImg.src="images/oreo.jpeg";
    oreoImg.setAttribute("id","oreo");
    oreo.appendChild(oreoTitle);
    oreo.appendChild(oreoImg);

    menuContent.appendChild(oreo);

    const smores=document.createElement('div');
    const smoresTitle=document.createElement('h6');
    smoresTitle.textContent='Smores $3.99';
    const smoresImg=document.createElement('img');
    smoresImg.src="images/smores.jpeg";
    smoresImg.setAttribute("id","smores");
    smores.appendChild(smoresTitle);
    smores.appendChild(smoresImg);

    menuContent.appendChild(smores);

    const content=document.getElementById('content');
    content.appendChild(menuTitle);
    content.appendChild(menuContent);

}

export default displayMenu