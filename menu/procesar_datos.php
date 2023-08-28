<?php
header("Location:../index.html");
    $valorBoton =(int) $_POST['boton_submit'];
  date_default_timezone_set('America/Mexico_City');
  $fecha_actual = strval(date("d-m-Y"));
  $fechaLimpia = str_replace('-','',$fecha_actual);
  

  $servername = "localhost"; // O el nombre del servidor proporcionado por 000webhost
  $username = "id21139955_thetestingprofile"; // Tu nombre de usuario de la base de datos
  $password = "8Vy*GpTA7#&x!7Kr"; // Tu contraseña de la base de datos
  $dbname = "id21139955_kintamaldb"; // El nombre de la base de datos

  $conn = mysqli_connect($servername, $username, $password, $dbname);

  if($conn){
      
  }

    //Datos del cliente
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $calle = $_POST["calle"];
    $numext = $_POST["numext"];
    $colonia = $_POST["colonia"];
    $codpos = $_POST["codpos"];
    
  
    //Cantidaddes y totales
    $oaxVerde = (int)$_POST["oax_cantidad1"];
    $oaxMole = (int)$_POST["oax_cantidad2"];
    $oaxRajas = (int)$_POST["oax_cantidad3"];
    $maiVerde = (int)$_POST["mai_cantidad1"];
    $maiMole = (int)$_POST["mai_cantidad2"];
    $maiRajas = (int)$_POST["mai_cantidad3"];
    $totalPz = (int)$_POST["total"];
    $totalAPagar = ((int)$totalPz) * 19;
    
    /*
    $sqlConsult = "SELECT MAX(id) AS ultimo_id FROM Cliente";
    $resultado = $conn->query($sqlConsult);
    $contador = 1;
    
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $ultimo_id = $fila["ultimo_id"];
        $contador = ((int)$ultimo_id) + 1;

        //echo "El último valor del campo 'id' es: " . $ultimo_id;
    } else {
      $contador = 1;  	
      //echo "La tabla está vacía.";
    }*/

    //echo "oaxVerde: " . gettype($oaxVerde) . "\noaxMole: " . gettype($oaxMole) . "\noaxRajas: " . gettype($oaxRajas) . "\nmaiVerde: " . gettype($maiVerde) . "\nmaiMole: " . gettype($maiMole) . "\nmaiRajas: " . gettype($maiRajas) . "\ntotalPz: " . gettype($totalPz) . "\ntotalAPagar: " . gettype($totalAPagar) . "\nfecha: " . gettype($fechaActual);
    echo "oaxVerde: " . $oaxVerde . "\noaxMole: " . $oaxMole . "\noaxRajas: " . $oaxRajas . "\nmaiVerde: " . $maiVerde . "\nmaiMole: " . $maiMole . "\nmaiRajas: " . $maiRajas . "\ntotalPz: " . $totalPz . "\ntotalAPagar: " . $totalAPagar . "\nfecha: " . $fechaLimpia;
    //$queryCliente = "INSERT INTO Cliente (nombre, apellido,correo, numero) VALUES ('$nombre', '$correo')";
    if($oaxVerde <= 0){

    }else{
      $queryOaxVerde = "INSERT INTO Tamal (tipo, sabor) VALUES ('oax', 'verde');";
      mysqli_query($conn,$queryOaxVerde);
    }

    if($oaxMole <= 0){

    }else{
      $queryOaxMole = "INSERT INTO Tamal (tipo, sabor) VALUES ('oax', 'mole');";
      mysqli_query($conn,$queryOaxMole);
    }
    
    if($oaxRajas <= 0){

    } else {
      $queryOaxRajas = "INSERT INTO Tamal (tipo, sabor) VALUES ('oax', 'rajas');";
      mysqli_query($conn,$queryOaxRajas);
    }

    if($maiVerde <= 0){

    }else{
      $queryMaiVerde = "INSERT INTO Tamal (tipo, sabor) VALUES ('mai', 'verde');";
      mysqli_query($conn,$queryMaiVerde);
    }

    if($maiMole <= 0){

    }else{
      $queryMaiMole = "INSERT INTO Tamal (tipo, sabor) VALUES ('mai', 'mole');";
      mysqli_query($conn,$queryMaiMole);
    }
    
    if($maiRajas <= 0){

    } else {
      $queryMaiRajas = "INSERT INTO Tamal (tipo, sabor) VALUES ('mai', 'rajas');";
      mysqli_query($conn,$queryMaiRajas);
    }
    
    
    $queryCliente = "INSERT INTO Cliente (Nombre, Apellido, Correo, Telefono, Calle, NumExt, Colonia, Codigpostal) values('$nombre','$apellido','$correo','$telefono','$calle','$numext','$colonia','$codpos');";
    
    $queryVenta = "INSERT INTO Venta (Fecha,Cantidad,Precio_Unitario,Total) values($fechaLimpia,$totalPz,19,$totalAPagar);";
    mysqli_query($conn, $queryVenta);
    mysqli_query($conn, $queryCliente);
    
    $totaloaxVerde = $oaxVerde * 19;
$totaloaxMole = $oaxMole * 19;
$totaloaxRajas = $oaxRajas * 19;
$totalmaiVerde = $maiVerde * 19;
$totalmaiMole = $maiMole * 19;
$totalmaiRajas = $maiRajas * 19;
$totalAPagar = ((int)$totalPz) * 19;



   // Recuperar los datos del formulario
    $correo_destino = "destinatario@example.com"; // Cambiar por el correo deseado
    $email = "no-reply@kintamal.com.mx";
    

    // Recuperar los datos de la compra
    $productos = $_POST["productos"];
    $cantidades = $_POST["cantidades"];
    $precios = $_POST["precios"];

    // Puedes agregar validaciones adicionales aquí, por ejemplo, validar el formato del correo electrónico.

    // Formato del correo
    if ($valorBoton == 1) {
        $asunto = "Confirmación de pedido - KinTamal";
    } else {
        $asunto = "Confirmación de compra - KinTamal";
    }
    
    $cabeceras = "From: " . $email . "\r\n";
    $cabeceras .= "Content-type: text/html; charset=utf-8\r\n";

    // Contenido del correo en formato de compra
    $contenido = '<html>';
    $contenido .= '<body>';
    if ($valorBoton == 1) {
        $contenido .= '<h2>Confirmación de pedido - KinTamal</h2>';
        $contenido .= '<p>Pedido confirmado. A continuación, se muestra el detalle de tu pedido:</p>';
    } else {
        $contenido .= '<h2>Confirmación de compra - KinTamal</h2>';
        $contenido .= '<p>Gracias por tu compra. A continuación, se muestra el detalle de tu pedido:</p>';
    }
    
    
    $contenido .= '<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">';
    $contenido .= '<tr>';
    $contenido .= '<th style="border: 1px solid #dddddd; padding: 8px; background-color: #ef9c2d; color: #FFFFFF; ">Producto</th>';
    $contenido .= '<th style="border: 1px solid #dddddd; padding: 8px; background-color: #6461a5; color: #FFFFFF;">Cantidad</th>';
    $contenido .= '<th style="border: 1px solid #dddddd; padding: 8px; background-color: #38a3b3; color: #FFFFFF;">Total</th>';
    $contenido .= '</tr>';

    // Agregar los productos de manera dinámica en el contenido del correo
    
    
    if($oaxVerde <= 0){

    }else{
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Oaxaqueño verde </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $oaxVerde . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totaloaxVerde . '</td>';
        $contenido .= '</tr>';
    }

    if($oaxMole <= 0){

    }else{
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Oaxaqueño mole </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $oaxMole . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totaloaxMole . '</td>';
        $contenido .= '</tr>';
    }
    
    if($oaxRajas <= 0){

    } else {
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Oaxaqueño rajas </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $oaxRajas . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totaloaxRajas . '</td>';
        $contenido .= '</tr>';
    }

    if($maiVerde <= 0){

    }else{
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Hoja de maíz verde </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $maiVerde . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totalmaiVerde . '</td>';
        $contenido .= '</tr>';
    }

    if($maiMole <= 0){

    }else{
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Hoja de maíz mole </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $maiMole . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totalmaiMole . '</td>';
        $contenido .= '</tr>';
    }
    
    if($maiRajas <= 0){
        
    } else {
        $contenido .= '<tr>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;"> Hoja de maíz rajas </td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">' . $maiRajas . '</td>';
        $contenido .= '<td style="border: 1px solid #dddddd; padding: 8px;">$' . $totalmaiRajas . '</td>';
        $contenido .= '</tr>';
    }
    


    $contenido .= '</table>';
    if ($valorBoton == 1) {
      $contenido .= '<p>Total a pagar: $' .$totalAPagar. '</p>';
      $contenido .= '<p>Gracias por su preferencia. Si tienes alguna pregunta o inquietud, no dudes en contactarnos.</p>';
    } else {
      $contenido .= '<p>Total pagado: $' .$totalAPagar. '</p>';
      $contenido .= '<p>Gracias por su compra. Si tienes alguna pregunta o inquietud, no dudes en contactarnos.</p>';
    }
    $contenido .= '</body>';
    $contenido .= '</html>';

    // Enviar el correo
    if (mail($correo, $asunto, $contenido, $cabeceras)) {
        //echo "¡El mensaje se envió correctamente!";
    } else {
        //echo "Hubo un problema al enviar el mensaje.";
    }


exit;
?>
