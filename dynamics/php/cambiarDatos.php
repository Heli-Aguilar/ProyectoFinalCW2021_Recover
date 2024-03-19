<?php
    $numCuenta = $_POST["numCuenta"];
    $añoInscripcion = $_POST["añoInscripcion"];
    $email = $_POST["email"];
    $numTelefono = $_POST["numTelefono"];
    $nombre = $_POST["nombre"];
    $calificacionTotal = $_POST["calificacionTotal"];
    $id_tipoUsuario = $_POST["id_tipoUsuario"];
    include("./config.php");
    $conexion = connect();
    $peticion = "UPDATE usuario SET añoInscripcion = $añoInscripcion, email = '$email', numTelefono = $numTelefono, nombre = '$nombre', calificacionTotal = $calificacionTotal, id_tipoUsuario = $id_tipoUsuario WHERE numCuenta = $numCuenta";
    //$peticion = mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    var_dump($peticion);
    var_dump($query);
?>