<?php
    //var_dump($_POST);
    $peticionesCumplidas = 0;
    $id_horario = $_POST["horario"];
    //como tal no tiene id solo es una manera mas facil de identificar la modalidad 1 = en linea, 2 = presensial 
    $id_modalidad = $_POST["modalidad"];
    $fecha = $_POST["dia"];
    $arregloFecha = explode("-", $fecha);
    $dia = $arregloFecha[2];
    //NC = numero de cuetna
    $NCAsesor = $_POST["numCuentaAs"];
    $NCAlumno = $_POST["numCuentaAl"];
    $NCAlumno = "320266241";
    $materia = $_POST["materia"];
    include("./config.php");
    $conexion = connect();

    $peticion = "SELECT id_asesoria FROM asesoria
                WHERE dia = $dia AND id_horario = $id_horario";

    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    $numFilas = mysqli_num_rows($query);
    //var_dump($numFilas);
    if($numFilas == 0)
    {
        $peticion = "INSERT INTO asesoria (id_materia,id_horario,modalidad,ubicacion,calificacion,dia)
                    VALUES ($materia,$id_horario,$id_modalidad,'pendiente',0, $dia)";

        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        if($query == true)
        {
            $peticionesCumplidas++;
        }
        $peticion = "SELECT id_asesoria FROM asesoria
                WHERE dia = $dia AND id_horario = $id_horario";

        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        $row = mysqli_fetch_array($query);
        $id_asesoria = $row["id_asesoria"];
        $peticion = "INSERT INTO asesoriahasusuario (NumCuenta,id_asesoria,id_tipoAsistente)
                    VALUES ($NCAsesor, $id_asesoria, 2)";
        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        if($query == true)
        {
            $peticionesCumplidas++;
        }
        $peticion = "INSERT INTO asesoriahasusuario (NumCuenta,id_asesoria,id_tipoAsistente)
                    VALUES ($NCAlumno, $id_asesoria, 1)";
        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        if($query == true)
        {
            $peticionesCumplidas++;
        }
        if($peticionesCumplidas == 3)
        {
            echo "ok";
        }
        else{
            echo "f";
        }
    }
    elseif($numFilas <= 4)
    {
        $row = mysqli_fetch_array($query);
        $id_asesoria = $row["id_asesoria"];
        $peticion = "INSERT INTO asesoriahasusuario (NumCuenta,id_asesoria,id_tipoAsistente)
                    VALUES ('$NCAlumno', $id_asesoria, 1)";
        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        //var_dump($query);
        if($query == true)
        {
            echo "ok";
        }
        else{
            echo "f";
        }
    }
    elseif($numFilas >= 5)
    {
        echo "ND";
    }
?>