<?php

    var_dump($_POST);
    $numCuenta = $_SESSION["cuenta"];
    include("./config.php");
    

    $conexion = connect();
    foreach($_POST as $key => $valor)
    {
        $peticion = "INSERT INTO usuariohasmateria (id_materia, numCuenta)
                    VALUES ($valor, $numCuenta)";
        $peticion = mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $query);
    }

?>