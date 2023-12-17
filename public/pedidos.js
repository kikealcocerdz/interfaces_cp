document.getElementById('dropdown-pais').addEventListener('click', function() {
  document.getElementById('dropdown-menu-pais').classList.toggle('hidden');
});
document.getElementById('dropdown-hora').addEventListener('click', function() {
  document.getElementById('dropdown-menu-hora').classList.toggle('hidden');
});


const lugar = document.getElementById("section-lugar");

const datos = document.getElementById("section-datos");

const confirmar = document.getElementById("section-confirmar");

const paginas = [lugar, datos, confirmar];

const button = document.getElementById("confirma_compra");

let submited = false;

let country = "España"


function hide_show(show) {
if (show == lugar) {
  show.style.removeProperty("display");
  datos.style.display = "none";
  confirmar.style.display = "none";
  button.textContent = "Confirmar Reserva";

}
else if (show == datos) {
  show.style.display = "flex";
  lugar.style.display = "none";
  confirmar.style.display = "none";
  button.textContent = "Comprobar Estado";

}
else {
  show.style.display = "flex";
  lugar.style.display = "none";
  datos.style.display = "none";
  button.textContent = "Finalizar Pedido";

}

}

const steps = document.querySelectorAll('.step');
// Funcion del nav para que se llame a la función cuando se hace click

steps.forEach((step, index) => {
step.addEventListener('click', () => {
  // Tienes que seleccionar una unidad para avanzar
  if (country != "Elija País") {
    if (index == 0) {
      setActiveStep(0);
    }

    else if (index == 1){
      setActiveStep(1);
    }

    else if (index == 2 && submited==true){
      setActiveStep(2);
    }
    else if (index == 2 && submited==false){
      // No podremos avanzar si no hemos rellenado el formulario
      setActiveStep(1);
    }
  }
});
});
// Misma funcionalidad que la función anterior, pero esta vez con los botones de abajao.
button.addEventListener('click', () => {
    // Tienes que seleccionar una unidad para avanzar
if (country != "Elija País") {
  // Si estamos en la pantalla final y la cuenta atras a terminado, si se presiona el boton nos vamos de nuevo al menú
  
  if (button.textContent == "Confirmar Reserva") {
    setActiveStep(1);
  }

  else if (button.textContent == "Comprobar Estado") {
    // No podremos avanzar si no hemos rellenado el formulario
    if (submited){
      setActiveStep(2);
    }
    else{
      alert("Primero debes Pagar!");
    }
  }

}
});

function setActiveStep(index) {
// Funcion que se ejecuta cada vez que se pulsa un boton de cambio de pestaña
steps.forEach((step, i) => {
  if (i === index) {
    // Le metemos la clase para indicar que estas en esa casa
    step.classList.add('active');
    // Y hacemos uso de la funcion para mostrar esa página
    hide_show(paginas[index]);
  } else {
    step.classList.remove('active');
    
  }
});
}

const form = document.getElementById("pago-form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  // Cuando pagamos nos vamos a la última pagina
  setActiveStep(2);
  submited = true;
  // Ocultamos el boton de pagar para que no modifique datos (aunque si podrá navegar)
  startButton.style.display = 'none';
  // Empezar animación haburguesa
  setTimeout(dropIngredient, delay);
  // Inicializar contador
  if (!countdownInterval) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  }
});