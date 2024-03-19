<?php
    $usuario = $_POST["usuario"];
    include("./config.php");
    $conexion = connect();
    $peticion = "SELECT * FROM usuario
                WHERE nombre LIKE '%$usuario%'";
    $peticon = mysqli_real_escape_string($conexion, $peticion);
    $querry = mysqli_query($conexion, $peticion);
    while($row = mysqli_fetch_array($querry))
    {
        //var_dump($row);
        echo $row["numCuenta"];
        echo ",";
        echo $row["añoInscripcion"];
        echo ",";
        echo $row["email"];
        echo ",";
        echo $row["numTelefono"];
        echo ",";
        echo $row["nombre"];
        echo ",";
        echo $row["calificacionTotal"];
        echo ",";
        echo $row["id_tipoUsuario"];
    }
?>