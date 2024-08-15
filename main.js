
const addButton = document.getElementById('nextPage');
const gifsContainer = document.getElementById('gifs-container');

function addElement() {

    const newElement = document.createElement('a');
    newElement.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement.class = "gif__link";
    
    const newElement1 = document.createElement('a');
    newElement1.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement1.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement1.class = "gif__link";

    const newElement2 = document.createElement('a');
    newElement2.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement2.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement2.class = "gif__link";

    const newElement3 = document.createElement('a');
    newElement3.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement3.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement3.class = "gif__link";

    const newElement4 = document.createElement('a');
    newElement4.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement4.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement4.class = "gif__link";

    const newElement5 = document.createElement('a');
    newElement5.href = 'https://giphy.com/gifs/human-note-reminder-3o7bu1QBfylzi8MmYw';
    newElement5.src = 'https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g';
    newElement5.class = "gif__link";


    const imageElement = document.createElement('img');
    imageElement.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement.alt = 'Описание изображения';
    imageElement.class="gif undefined";

    const imageElement1 = document.createElement('img');
    imageElement1.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement1.alt = 'Описание изображения';
    imageElement1.class="gif undefined";

    const imageElement2 = document.createElement('img');
    imageElement2.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement2.alt = 'Описание изображения';
    imageElement2.class="gif undefined";

    const imageElement3 = document.createElement('img');
    imageElement3.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement3.alt = 'Описание изображения';
    imageElement3.class="gif undefined";

    const imageElement4 = document.createElement('img');
    imageElement4.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement4.alt = 'Описание изображения';
    imageElement4.class="gif undefined";

    const imageElement5 = document.createElement('img');
    imageElement5.src="https://media1.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif?cid=f2be6aa17jqnuol5hjg3wqgac0jpkiopm1666d5cjgj56pmk&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g" ;
    imageElement5.alt = 'Описание изображения';
    imageElement5.class="gif undefined";

    newElement.appendChild(imageElement);
    gifsContainer.appendChild(newElement);

    newElement1.appendChild(imageElement1);
    gifsContainer.appendChild(newElement1);

    newElement2.appendChild(imageElement2);
    gifsContainer.appendChild(newElement2);

    newElement3.appendChild(imageElement3);
    gifsContainer.appendChild(newElement3);

    newElement4.appendChild(imageElement4);
    gifsContainer.appendChild(newElement4);

    newElement5.appendChild(imageElement5);
    gifsContainer.appendChild(newElement5);

    document.getElementById(gifsContainer).appendChild(newElement);
    document.getElementById(gifsContainer).appendChild(imageElement);
    document.getElementById(gifsContainer).appendChild(newElement1);
    document.getElementById(gifsContainer).appendChild(imageElement1);
    document.getElementById(gifsContainer).appendChild(newElement2);
    document.getElementById(gifsContainer).appendChild(imageElement2);
    document.getElementById(gifsContainer).appendChild(newElement3);
    document.getElementById(gifsContainer).appendChild(imageElement3);
    document.getElementById(gifsContainer).appendChild(newElement4);
    document.getElementById(gifsContainer).appendChild(imageElement4);
    document.getElementById(gifsContainer).appendChild(newElement5);
    document.getElementById(gifsContainer).appendChild(imageElement5);
}


addButton.addEventListener('click', addElement);
