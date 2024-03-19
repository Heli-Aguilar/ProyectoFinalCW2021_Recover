<?php
    include("config.php");
    $conexion = connect();
    $id_peticion = $_POST["peticion"];
    $numCuenta = $_POST["id_usuario"];
    $peticion = "";
    //solicita todos los datos de un usuario solo necesita su numerp de cuenta
    if($id_peticion == 1)
    {
        $peticion = "SELECT * FROM usuario 
                    WHERE numCuenta LIKE '$numCuenta'";
    }
    //pide las materias que domina
    if($id_peticion == 2)
    {
        $peticion = "SELECT materia FROM usuariohasmateria
                    INNER JOIN usuario ON usuario.numCuenta = usuariohasmateria.numCuenta
                    INNER JOIN materia ON materia.id_materia = usuariohasmateria.id_materia
                    WHERE numCuenta LIKE '$numCuenta'";
    }
    //pide los horarios
    if($id_peticion == 3)
    {
        $peticion = "SELECT * FROM usuariohashorarios
                    INNER JOIN usuario ON usuario.numCuenta = usuariohashorarios.numCuenta
                    INNER JOIN horario ON horario.id_horario = usuariohashorarios.id_horario
                    WHERE numCuenta LIKE '$numCuenta'";
    }
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    mysqli_fetch_array($query);
?>
