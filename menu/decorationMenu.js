document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos los elementos de los inputs y divs por su ID
  const opcion1 = document.getElementById('tipoPagoEf');
  const opcion2 = document.getElementById('tipoPagoPa');
  const divOpcion1 = document.getElementById('divOpcion1');
  const divOpcion2 = document.getElementById('divOpcion2');

  // Agregamos un "event listener" para el evento 'click' a ambos inputs
  opcion1.addEventListener('click', function() {
    // Mostramos el div correspondiente a la opción 1 y ocultamos el de la opción 2
    divOpcion1.style.display = 'block';
    divOpcion2.style.display = 'none';
    divOpcion1.style.height = divOpcion1.scrollHeight + 'em'; // Establecemos la altura
    divOpcion2.style.height = '0'; // Ocultamos el otro div estableciendo la altura en 0

  });

  opcion2.addEventListener('click', function() {
    // Mostramos el div correspondiente a la opción 2 y ocultamos el de la opción 1
    divOpcion2.style.display = 'block';
    divOpcion1.style.display = 'none';
    divOpcion2.style.height = divOpcion2.scrollHeight + 'em'; // Establecemos la altura
    divOpcion1.style.height = '0'; // Ocultamos el otro div estableciendo la altura en 0
  
  });

  const form = document.getElementById('menu-form');
  

  form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
  });
});