const addButton = document.getElementById("nextPage");
const gifsContainer = document.getElementById("gifs-container");

function addElement() {
  let gifsContainerClone = gifsContainer.cloneNode(true);
  gifsContainer.after(gifsContainerClone);
}

addButton.addEventListener("click", addElement);
