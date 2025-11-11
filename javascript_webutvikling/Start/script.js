console.log("JavaScript fungerer!");
alert("Velkommen til min første nettside!");
var navn = prompt("Hva heter du?")
alert("Hyggelig å møte deg," + navn + "!");

console.log("Brukeren heter:", navn)

const knapp = document.getElementById("knapp");
knapp.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
    knapp.textContent = "Du klikket!"
});

const navn = ["Ola", "Kari", "Per", "Nora"];

console.log(navn[0]); // Første
console.log("Antall:", navn.length);

for (let i = 0; i < navn.length; i++) {
  console.log("Hei", navn[i]);
}

const liste = document.createElement("ul");

navn.forEach(n => {
  const li = document.createElement("li");
  li.textContent = n;
  liste.appendChild(li);
});

document.body.appendChild(liste);

const input = document.getElementById("navnInput");
const knapp = document.getElementById("visKnapp");
const resultat = document.getElementById("resultat");

knapp.addEventListener("click", () => {
  resultat.textContent = "Hei, " + input.value + "!";
});