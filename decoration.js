document.addEventListener("DOMContentLoaded", function() {
  //Regresar a index
  const logo = document.getElementById("logoindex");
  logo.addEventListener("click",function(){
      window.location.href = "index.php";
  });
  
  // Función para detectar el tipo de navegador
  const imagenCarrusel = document.querySelectorAll(".carousel img");
  const carruselDiv = document.querySelectorAll('.carousel-outer');
      
  function detectarNavegador() {
    if (navigator.userAgentData) {
      // Accedemos a la propiedad brands del objeto userAgentData
      const brands = navigator.userAgentData.brands;
      // Verificamos si entre las marcas se encuentra el navegador deseado
      const isFirefox = brands.some(brand => brand.brand === 'Firefox');
      const isBrave = brands.some(brand => brand.brand === 'Brave');
      const isEdge = brands.some(brand => brand.brand === 'Microsoft Edge');

      if (isFirefox) {
        // Ajustes para Firefox
        
      } else if (isBrave) {
        // Ajustes para Brave
        imagenCarrusel.forEach(function(imagen) {
          imagen.style.height = "15%"; 
          
        });
        
        carruselDiv.forEach((miDiv) => {
            miDiv.style.maxHeight = '250px'; // Puedes cambiar el valor '300px' por el que necesites
        });
        
      } else if (isEdge) {
        // Ajustes para Microsoft Edge
        imagenCarrusel.forEach(function(imagen) {
          imagen.style.height = "15%"; 
          
        });
        
        carruselDiv.forEach((miDiv) => {
            miDiv.style.maxHeight = '250px'; // Puedes cambiar el valor '300px' por el que necesites
        });
        
        
      } else {
        // Ajustes predeterminados para otros navegadores
        imagenCarrusel.forEach(function(imagen) {
          imagen.style.height = "15%"; 
          
        });

        carruselDiv.forEach((miDiv) => {
          miDiv.style.maxHeight = '250px'; // Puedes cambiar el valor '300px' por el que necesites
      });
      }
    }
  }  
  detectarNavegador();

  const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement; // Obtener el elemento padre (faq-item)
    const answer = item.querySelector(".faq-answer"); // Obtener el elemento .faq-answer

    // Obtener la estado actual de la respuesta
    const isOpen = item.classList.contains("active");

    // Si la respuesta está abierta, establecer altura a 0 para cerrarla
    if (isOpen) {
      answer.style.maxHeight = "0";
    } else {
      // Si la respuesta está cerrada, obtener la altura real de la respuesta para la transición
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    // Al hacer clic, añadir o quitar la clase "active"
    item.classList.toggle("active");
  });
});

});
