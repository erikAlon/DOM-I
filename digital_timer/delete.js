const msTen = document.getElementbyID("msTens");

msTen.innerHTML = "0";

let newMsTen = parseInt(msTen.innerHTML); // changed string to number

newMsTen += 1; // modified number

msTen.innerHTML = newMsTen.toString(); // changed number to string