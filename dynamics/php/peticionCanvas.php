<?php
    $id_horario = $_POST["id_horario"];
    include("./config.php");
    $conexion = connect();
    $peticion = "SELECT * FROM horario
                WHERE id_horario = $id_horario";
    
    $query = mysqli_query($conexion, $peticion);
    //var_dump($query);
    while($row = mysqli_fetch_array($query))
    {
        echo $row["horaInicio"];
        echo "-";
        echo $row["horaFinal"];
    }
?>