document.addEventListener("DOMContentLoaded", () => { // hasta que no carga todo el DOM
    const input_submit = document.querySelector("input[type=submit]");
    input_submit.addEventListener("click", function (e) {
      e.preventDefault(); // para el submit
      // validacion
      // let submit = true; // 1a forma submit
      const parrafos = document.querySelectorAll("p");
      // nombre 
      const nombre = document.querySelector("input[type=text]");
      if (nombre.value.length === 0) { // si es vacio
        nombre.classList.add("error");
        parrafos[0].textContent = "Rellena el campo nombre";
        // submit = false; // 1a forma submit
      } else if (nombre.value.length < 6) {  // menor que 6 caract
        nombre.classList.add("error");
        parrafos[0].textContent = "Mínimo 6 caracteres";
        // submit = false; // 1a forma submit
      } else {
        nombre.classList.remove("error");
        parrafos[0].textContent = "";
      }
      // email 
      const email = document.querySelector("input[type=email]");
      const regexp1 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
      if (email.value.length === 0) { // si es vacio
        email.classList.add("error");
        parrafos[1].textContent = "Rellena el campo email";
        // submit = false; // 1a forma submit
      } else if (!regexp1.test(email.value)) {  // email formato ko 
        email.classList.add("error");
        parrafos[1].textContent = "Formato de email incorrecto";
        // submit = false; // 1a forma submit
      } else {
        email.classList.remove("error");
        parrafos[1].textContent = "";
      }
  
      // contraseñas
      // pass 1 
      const pass = document.querySelectorAll("input[type=password]");
      const regexp2 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6}$/;
  
      if (pass[0].value.length === 0) { // si es vacio
        pass[0].classList.add("error");
        parrafos[2].textContent = "Rellena el campo contraseña";
        // submit = false; // 1a forma submit
      } else if (!regexp2.test(pass[0].value)) {  // pass formato ko 
        pass[0].classList.add("error");
        parrafos[2].textContent = "Como mínimo 6 caract, una mayúscula, una minúscula y un número";
        // submit = false; // 1a forma submit
      } else {
        pass[0].classList.remove("error");
        parrafos[2].textContent = "";
      }
  
      // pass 2 repetir
      if (pass[1].value.length === 0) { // si es vacio
        pass[1].classList.add("error");
        parrafos[3].textContent = "Rellena el campo repetir contraseña";
        // submit = false; // 1a forma submit
      } else if (pass[0].value !== pass[1].value) {  // pass1 != pass2
        pass[1].classList.add("error");
        parrafos[3].textContent = "Las contraseñas no coinciden";
        // submit = false; // 1a forma submit
      } else {
        pass[1].classList.remove("error");
        parrafos[3].textContent = "";
      }
  
      const inputs = document.querySelectorAll("input");
      const submit = true;
      for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].classList.contains("error")) {
          submit = false;
        }
      }
      if (submit) {
        const form = document.querySelector("form");
        form.submit();
        alert("Formulario de registro enviado!")
      }
    })
  })