function createContact(){
    const contactContent=document.createElement('div');
    contactContent.classList.add('contact-content');

    

    const addressDiv=document.createElement('div');
    addressDiv.setAttribute("id", "addressDiv");

    const mapIcon = document.createElement('img');
    mapIcon.src = 'images/map-icon.png';
    mapIcon.setAttribute("id","map-icon");

    
    const address=document.createElement('p');
    address.setAttribute("id", "address");
    address.textContent='20 Cupcake Lane';

   
    addressDiv.appendChild(mapIcon);
    addressDiv.appendChild(address);

    contactContent.appendChild(addressDiv);

    const contactImg = document.createElement('img');
    contactImg.src = 'images/google-map.jpeg';
    contactImg.setAttribute("id","map");

    contactContent.appendChild(contactImg);


    const socialMediaDiv = document.createElement("div");
    socialMediaDiv.setAttribute("id", "socialMediaDiv");

    const facebook = document.createElement("div");
    facebook.classList.add("social-media-link");
    facebook.innerHTML = '<a href=#><i class="fab fa-facebook-f"></i></a>';

    const instagram = document.createElement("div");
    instagram.classList.add("social-media-link");
    instagram.innerHTML = '<a href=#><i class="fab fa-instagram "></i></a>';

    const twitter = document.createElement("div");
    twitter.classList.add("social-media-link");
    twitter.innerHTML = '<a href=#><i class="fab fa-twitter"></i></a>';

    socialMediaDiv.appendChild(facebook);
    socialMediaDiv.appendChild(instagram);
    socialMediaDiv.appendChild(twitter);
    
    contactContent.appendChild(socialMediaDiv);

    const content=document.getElementById('content');
    content.appendChild(contactContent);
   
}


export default createContact