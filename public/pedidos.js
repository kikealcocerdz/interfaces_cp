document.getElementById('dropdown-pais').addEventListener('click', function () {
  document.getElementById('dropdown-menu-pais').classList.toggle('hidden');
});
document.getElementById('dropdown-hora').addEventListener('click', function () {
  document.getElementById('dropdown-menu-hora').classList.toggle('hidden');
});



const posible_hours = document.querySelectorAll(".selected_hour");
posible_hours.forEach((selected_hour, index) => {

  selected_hour.addEventListener('click', () => {
    if (index == 0) {
      document.getElementById('dropdown-menu-hora').classList.toggle('hidden');
      hora.textContent = "16:00";
    }
    else if (index == 1) {
      document.getElementById('dropdown-menu-hora').classList.toggle('hidden');
      hora.textContent = "17:00";
    }
    else if (index == 2) {
      hora.textContent = "18:00";
      document.getElementById('dropdown-menu-hora').classList.toggle('hidden');

    }
    else if (index == 3) {
      hora.textContent = "19:00";
      document.getElementById('dropdown-menu-hora').classList.toggle('hidden');

    }
  }
  )
}
)
const iframe = document.querySelector('iframe');
const srcValue = iframe.getAttribute('src');
console.log(srcValue);

const posible_countries = document.querySelectorAll(".posible_countries");
posible_countries.forEach((selected_country, index) => {
  selected_country.addEventListener('click', () => {
    let srcValue = "";
    if (index == 0) {
      country.textContent = "España";
      document.getElementById('dropdown-menu-pais').classList.toggle('hidden');
      srcValue = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.9315057446458!2d-3.967526892206348!3d39.865596421769084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a090cdd52e087%3A0x4fc8aa2ef30036da!2sC.%20R%C3%ADo%20Valdelospozos%2C%204%2C%2045007%20Toledo!5e0!3m2!1ses!2ses!4v1702572516410!5m2!1ses!2ses";
    }
    else if (index == 1) {
      country.textContent = "EE.UU";
      document.getElementById('dropdown-menu-pais').classList.toggle('hidden');
      srcValue = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2572374063247!2d-122.4216776!3d37.7840109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580965a472c31%3A0xc892f151d90b3534!2sLand%20Rover%20San%20Francisco!5e0!3m2!1ses!2ses!4v1702818321964!5m2!1ses!2ses";
    }
    else if (index == 2) {
      country.textContent = "Alemania";
      document.getElementById('dropdown-menu-pais').classList.toggle('hidden');
      srcValue = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21308.39357923402!2d11.470320161117778!3d48.11893136771221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd9b95fdbf973%3A0xd752aae3c4b839e!2sReality%20Services%20GmbH!5e0!3m2!1ses!2ses!4v1702818224306!5m2!1ses!2ses";
    }
    iframe.setAttribute('src', srcValue);
  });
});

const lugar = document.getElementById("section-lugar");

const datos = document.getElementById("section-datos");

const confirmar = document.getElementById("section-confirmar");

const paginas = [lugar, datos, confirmar];

const button = document.getElementById("confirma_compra");

let submited = false;

let country = document.getElementById("pais");

let hora = document.getElementById("hora");

let fecha = document.getElementById("selected-date");

let credit_card = document.getElementById("credit_card");

const targeta = document.getElementById("tarjeta");

let l_compra = document.getElementById("lugar");

let f_compra = document.getElementById("fech");

let h_compra = document.getElementById("hor");

const car = document.getElementById("car");

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
    console.log(country.textContent);
    if (index == 0) {
      setActiveStep(0);
    }
    else if (index == 1 && country.textContent == "País") {
      alert("Tienes que elegir un país donde reservar!!");
    }
    else if (index == 1 && country.textContent != "País" && fecha.value != "" && hora.textContent != "Hora") {
      setActiveStep(1);
    }
    else if (index == 1 && country.textContent != "País" && hora.textContent != "Hora") {
      alert("Falta Rellenar la fecha!!");
    }
    else if (index == 1 && country.textContent != "País" && fecha.value != "") {
      alert("Falta Rellenar la hora!!");
    }
    else if (index == 2 && submited == true) {
      setActiveStep(2);
    }
    else if (index == 2 && submited == false) {
      // No podremos avanzar si no hemos rellenado el formulario
      alert("Primero debes Pagar!");
    }
  });
});
// Misma funcionalidad que la función anterior, pero esta vez con los botones de abajao.
button.addEventListener('click', () => {
  // Tienes que seleccionar una unidad para avanzar

  // Si estamos en la pantalla final y la cuenta atras a terminado, si se presiona el boton nos vamos de nuevo al menú
  if (button.textContent == "Confirmar Reserva" && country.textContent != "País" && fecha.value != "" && hora.textContent != "Hora") {
    setActiveStep(1);
  }
  else if (button.textContent == "Confirmar Reserva" && country.textContent != "País" && hora.textContent != "Hora") {
    alert("Falta Rellenar la fecha!!");
  }
  else if (button.textContent == "Confirmar Reserva" && country.textContent != "País" && fecha.value != "") {
    alert("Falta Rellenar la hora!!");
  }
  else if (button.textContent == "Confirmar Reserva" && country.textContent == "País") {
    alert("Tienes que elegir un páis donde reservar!!");
  }

  else if (button.textContent == "Comprobar Estado") {
    // No podremos avanzar si no hemos rellenado el formulario
    if (submited) {
      setActiveStep(2);
    }
    else {
      alert("Primero debes Pagar!");
    }
  }
  else if (button.textContent == "Finalizar Pedido") {
    if (submited) {
      reserva_hecha.style.display = "flex";
      setTimeout(() => {
        location.href = "/";
      }, 3000);
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
form.addEventListener("submit", (event) => {
  event.preventDefault();
  credit_card.textContent = "Credit card:" + targeta.value;
  l_compra.textContent = "Lugar: " + country.textContent;
  f_compra.textContent = " Fecha: " + fecha.value;
  h_compra.textContent = " Hora: " + hora.textContent;
  // Cuando pagamos nos vamos a la última pagina
  setActiveStep(2);
  submited = true;

  // Ocultamos el boton de pagar para que no modifique datos (aunque si podrá navegar)
  startButton.style.display = 'none';
});



