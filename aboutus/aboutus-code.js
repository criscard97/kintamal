document.addEventListener("DOMContentLoaded", function () {
    //Quitar marca de agua de 000webhost
    var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
    if(disclaimer){
       disclaimer.remove();
    }  
    
    //Regresar a index
    const logo = document.getElementById("logo");
    logo.addEventListener("click",function(){
        window.location.href = "../index.html";
    });
});