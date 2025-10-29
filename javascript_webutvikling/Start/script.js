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