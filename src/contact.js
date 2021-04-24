function displayContact(){
    const contactContent=document.createElement('div');
    contactContent.classList.add('contact-content');

    const email=document.createElement('div');
    const emailTitle=document.createElement('h3');
    emailTitle.textContent='tastytreats@gmail.com';
    email.appendChild(emailTitle);

    contactContent.appendChild(email);

    const content=document.getElementById('content');
    content.appendChild(contactContent);
}

export default displayContact