
document.addEventListener("DOMContentLoaded", function () {
  //Quitar marca de agua de 000webhost
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
  if(disclaimer){
     disclaimer.remove();
  }  
  
  const inputIds = ["oax_cantidad1", "oax_cantidad2", "oax_cantidad3", "mai_cantidad1" , "mai_cantidad2", "mai_cantidad3", "total","totalApagar"];

  // Establecer los valores en 0 al cargar la página
  inputIds.forEach((inputId) => {
    const input = document.getElementById(inputId);
    input.value = 0;
  });
    const numeroInput = document.getElementById("oax_cantidad1");
    const numeroInput2 = document.getElementById("oax_cantidad2");
    const numeroInput3 = document.getElementById("oax_cantidad3");
    const numeroInput4 = document.getElementById("mai_cantidad1");
    const numeroInput5 = document.getElementById("mai_cantidad2");
    const numeroInput6 = document.getElementById("mai_cantidad3");
    const resultado = document.getElementById("total");
    const resultado2 = document.getElementById("totalApagar");
    const AgradecerPago = document.getElementById("menu-form")
    const botonFinal = document.getElementById("cashpay");
    AgradecerPago.addEventListener("submit", function(event) {
      window.alert("Pedido realizado, gracias por su preferencia");
      
    });

    botonFinal.addEventListener("click",function(){
      AgradecerPago.submit();
      window.location.href = 'procesar_datos.php'; // Cambia "otra_pagina.php" con la URL deseada
    });

    numeroInput.addEventListener("input", calularTotal);
    numeroInput2.addEventListener("input", calularTotal);
    numeroInput3.addEventListener("input", calularTotal);
    numeroInput4.addEventListener("input", calularTotal);
    numeroInput5.addEventListener("input", calularTotal);
    numeroInput6.addEventListener("input", calularTotal);

    function calularTotal(){
      const valor1=parseInt(numeroInput.value) || 0;
      const valor2=parseInt(numeroInput2.value) || 0;
      const valor3=parseInt(numeroInput3.value) || 0;
      const valor4=parseInt(numeroInput4.value) || 0;
      const valor5=parseInt(numeroInput5.value) || 0;
      const valor6=parseInt(numeroInput6.value) || 0;

      resultado.value=valor1+valor2+valor3+valor4+valor5+valor6;
      resultado2.value='$ ' + (resultado.value)*19;
    }
    
    const logoMenu = document.getElementById("logo");
    logoMenu.addEventListener("click",function(){
      window.location.href = "../index.html";
    });

    

      const logo1 = document.getElementById("menu-icon");
      const logo2 = document.getElementById("icon-cart");
      const logo3 = document.getElementById("icon-pay");
      const totalTamalCant = document.getElementById("total");
      const boton1 = document.getElementById("ToCart");
      const boton2 = document.getElementById("ToPayment");
      const regbot1 = document.getElementById("rToMenu");
      const regbot2 = document.getElementById("rToCart");
      const contenido1 = document.getElementById("menu-content");
      const contenido2 = document.getElementById("menu-cart");
      const contenido3 = document.getElementById("payment-method");
      

      contenido3.style.display="none";
      contenido2.style.display="none";
      contenido1.style.display="block";

      boton1.addEventListener("click",function(){
        var numero = parseInt(totalTamalCant.value);
        if(numero <= 0){
          window.alert("Cantidad no valida");
        }else{
          
          logo2.style.background="rgb(255, 199, 123)";
          logo1.style.background="none";
          logo3.style.background="none";
          contenido3.style.display="none";
          contenido2.style.display = "block";
          contenido2.classList.add("slide-in");
          contenido1.style.display = "none";

          

        }
      });
      
      const nombre = document.getElementById("Nombre");
      const apellido = document.getElementById("Apellido");
      const correo = document.getElementById("Mail");
      const telefono = document.getElementById("Telefono");
      const calle = document.getElementById("Calle");
      const numext = document.getElementById("Numext");
      const colonia = document.getElementById("Colonia");
      const codpos = document.getElementById("Codpos");
      
      // Función para verificar si algún campo está vacío
      function areAnyFieldsEmpty() {
        const campos = [
          nombre, apellido, correo, telefono, calle, numext, colonia, codpos
        ];

        for (const campo of campos) {
          if (campo.value.trim() === '') {
            return true;
          }
        }
        return false;
      }

      // Función para manejar el clic del botón
      function handleButtonClick() {
        if (areAnyFieldsEmpty()) {
          window.alert("Por favor, llene todos los campos antes de continuar.");
        } else {
          if(boton2.value === "1"){
                logo3.style.background="rgb(255, 199, 123)";
                logo1.style.background="none";
                logo2.style.background="none";
                contenido2.style.display="none";
                contenido3.style.visibility="visible";
                contenido3.style.display="block";
                contenido3.classList.add("slide-in");
                contenido2.classList.remove("slide-out");
                contenido1.style.display = "none";
          }else{
                console.log("ELse");
                boton2.value = "1";
                logo3.style.background="rgb(255, 199, 123)";
                logo1.style.background="none";
                logo2.style.background="none";
                contenido2.style.display="none";
                contenido3.style.display="block";
                contenido3.classList.add("slide-in");
                contenido2.classList.remove("slide-out");
                contenido1.style.display = "none";
                  

                var formData = document.getElementById("total");
                var numero = parseInt(formData.value) * 19;
                  
                paypal.Buttons({
                    style:{
                        shape:'pill',
                        label: 'pay',
                    },
                    createOrder:function(data, actions){
                        
                        return actions.order.create({
                            purchase_units: [{
                                amount:{
                                    value:numero
                                }
                            }]
                        });
                    },
                    onApprove:function(data,actions){
                      //window.alert("Gracias por su compra");
                      document.getElementById('menu-form').addEventListener('submit', function(event){
                        event.preventDefault();
                        var nombre = document.getElementById('nombre').value;
                      var apellido = document.getElementById('apellido').value;
                      var correo = document.getElementById('correo').value;
                      var telefono = document.getElementById('telefono').value;
                      var calle = document.getElementById('calle').value;
                      var numext = document.getElementById('numext').value;
                      var colonia = document.getElementById('colonia').value;
                      var codpos = document.getElementById('codpos').value;

                      var oaxVerde = document.getElementById('oax_cantidad1').value;
                      var oaxMole = document.getElementById('oax_cantidad2').value;
                      var oaxRajas = document.getElementById('oax_cantidad3').value;
                      var maiVerde = document.getElementById('mai_cantidad1').value;
                      var maiMole = document.getElementById('mai_cantidad2').value;
                      var maiRajas = document.getElementById('mai_cantidad3').value;
                      var totalPz = document.getElementById('total').value;
                      AgradecerPago.submit();
                      var formData = new FormData();
                      formData.append('nombre',nombre);
                      formData.append('apellido',apellido);
                      formData.append('correo',correo);
                      formData.append('telefono',telefono);
                      formData.append('calle',calle);
                      formData.append('numext',numext);
                      formData.append('colonia',colonia);
                      formData.append('codpos',codpos);
                      formData.append('oax_cantidad1',oaxVerde);
                      formData.append('oax_cantidad2',oaxMole);
                      formData.append('oax_cantidad3',oaxRajas);
                      formData.append('mai_cantidad1',maiVerde);
                      formData.append('mai_cantidad2',maiMole);
                      formData.append('mai_cantidad3',maiRajas);
                      formData.append('total',totalPz);
                      fetch('procesardatos.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                      
                    });
                      window.location.href = 'procesar_datos.php'; // Cambia "otra_pagina.php" con la URL deseada
                      return actions.order.capture().then(function(details) {
                        // Redirección personalizada después de la transacción completada
                        
                        

                      });
                    },
                    
                    onCancel: function(data){
                        //alert("Pago cancelado");
                        console.log(data);
                    }
                }).render('#paypal-button-container');
          }
        }
      }

      boton2.addEventListener("click",handleButtonClick);

      regbot1.addEventListener("click",function(){
          logo1.style.background="rgb(255, 199, 123)";
          logo2.style.background="none";
          logo3.style.background="none";
          contenido3.style.display="none";
          contenido1.style.display = "block";
          contenido1.classList.add("slide-in");
          contenido2.style.display = "none";
      });

      regbot2.addEventListener("click",function(){
          logo2.style.background="rgb(255, 220, 173)";
          logo1.style.background="none";
          logo3.style.background="none";
          contenido3.style.display="table-column";
          contenido3.style.visibility="hidden";
          contenido2.style.display = "block";
          contenido2.classList.add("slide-in");
          contenido1.style.display = "none";
          //contpaypal.style.display = "none";
      });

      

      
      
      
    
  


  });