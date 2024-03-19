<?php
    //var_dump($_POST);
    include("./config.php");
    $ubicacion = $_POST["ubicacion"];
    $id_asesoria = $_POST["id_asesoria"];
    $conexion = connect();
    $peticion = "UPDATE asesoria SET ubicacion = '$ubicacion'
                WHERE ubicacion LIKE 'pendiente' AND id_asesoria = $id_asesoria";
    //var_dump($peticion);
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    if($query === true)
    {
        echo "ok";
    }
?>