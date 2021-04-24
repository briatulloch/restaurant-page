
function displayHome(){

	const homeDiv = document.createElement('div');

    const image = document.createElement('img');
    image.src = 'images/cupcake.jpeg';
    image.setAttribute("id","homeImg");

	

	homeDiv.appendChild(image);

	const content = document.getElementById('content');
	content.appendChild(homeDiv);
}

export default displayHome