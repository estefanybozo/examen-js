import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animal.js";
import dato_animal from "./Api.js";

// Crear las instancias de las clases utilizando los datos del formulario.

let animales = [];
let img = document.getElementById("preview");
let audio = document.getElementById("player");
let registrar = document.getElementById("btnRegistrar");
let nombre = document.getElementById("animal");

registrar.addEventListener("click", async () => {
  let edad = document.getElementById("edad");
  let comentarios = document.getElementById("comentarios");
  let animal;

  if (nombre.value && edad.value && comentarios.value) {
    let datos = await dato_animal.mostrar;

    if (nombre.value == "Leon") {
      animal = new Leon(
        nombre.value,
        edad.value,
        datos.animales[0].imagen,
        comentarios.value,
        datos.animales[0].sonido
      );
    } else if (nombre.value == "Lobo") {
      animal = new Lobo(
        nombre.value,
        edad.value,
        datos.animales[1].imagen,
        comentarios.value,
        datos.animales[1].sonido
      );
    } else if (nombre.value == "Oso") {
      animal = new Oso(
        nombre.value,
        edad.value,
        datos.animales[2].imagen,
        comentarios.value,
        datos.animales[2].sonido
      );
    } else if (nombre.value == "Serpiente") {
      animal = new Serpiente(
        nombre.value,
        edad.value,
        datos.animales[3].imagen,
        comentarios.value,
        datos.animales[3].sonido
      );
    } else if (nombre.value == "Aguila") {
      animal = new Aguila(
        nombre.value,
        edad.value,
        datos.animales[4].imagen,
        comentarios.value,
        datos.animales[4].sonido
      );
    }

    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = "";
    img.innerHTML = `<img src="">`;
    animales.push(animal);
    mostrarTabla();
  } else {
    alert("Ingresar datos validos porfis");
  }
});
//Creacion de evento tipo change
document
  .getElementById("animal")
  .addEventListener("change", function cambiarFoto() {
    let nombre = document.getElementById("animal");
    if (nombre.value == "Leon") {
      img.innerHTML = `<img src="./assets/imgs/Leon.png" alt="imagen_leon" width= "200" heigth="auto">`;
    } else if (nombre.value == "Lobo") {
      img.innerHTML = `<img src="./assets/imgs/Lobo.jpg" alt="imagen_lobo" width= "200" heigth="auto">`;
    } else if (nombre.value == "Oso") {
      img.innerHTML = `<img src="./assets/imgs/Oso.jpg" alt="imagen_oso" width= "200" heigth="auto">`;
    } else if (nombre.value == "Serpiente") {
      img.innerHTML = `<img src="./assets/imgs/Serpiente.jpg" alt="imagen_serpiente" width= "200" heigth="auto">`;
    } else if (nombre.value == "Aguila") {
      img.innerHTML = `<img src="./assets/imgs/Aguila.png" alt="imagen_aguila" width= "200" heigth="auto">`;
    }
  });

let mostrarTabla = () => {
  let animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";

  animales.forEach((animal, index) => {
    animalesTemplate.innerHTML += `
    <div class="m-2">
      <div data-fighter="${animal.getNombre()}">
        <div>
          <div class="" style="width: 100px heigth: auto">
            <img
              src="./assets/imgs/${animal.getImg()}"
              alt="imagen_animal"
              style="width:100px" "heigth:auto"
              onclick="verDatos(${index})"
              data-toggle="modal"
              data-target="#datos"
            />
            <div class="py-1" style="background-color: green">
              <div class="m-1" id="audio" onclick="sonido(${index})"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
  });
};
window.sonido = (entry) => {
  let animal = animales[entry]
  let sonido = animal.getSonido()
  audio.src = `assets/sounds/${sonido}`
  audio.play()
}
window.verDatos = (entry) => {
  let datos = animales[entry]
  let modal = document.getElementById("datosAnimal")
  modal.innerHTML = `
    <div>
    <div>
    <img src="./assets/imgs/${datos.getImg()}" style="width: 200" "heigth: auto" />
    </div>
    <div class="text-center mt-2">
    <p class="text-white"> Edad: ${datos.getEdad()}</p>
    </div> 
    <div class="text-center mt-2 text-white">
    <p>Comentarios</p>
    <p>${datos.getComentarios()}</p>
    </div>
    </div>
    `
}