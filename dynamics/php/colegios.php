<?php
    // $cookie = $_COOKIE['colegio'];
    //var_dump($_COOKIE);
    $cookie = $_COOKIE['colegio'];
    //var_dump($cookie);
    //echo $cookie;
    include("./config.php");
    $conexion = connect();

    $peticion = "SELECT materia, materia.id_materia FROM colegiohasmateria 
                INNER JOIN materia ON materia.id_materia = colegiohasmateria.id_materia 
                WHERE id_colegio = $cookie";
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    $arr = [];
    $var = [];
    $i = 0;
    while($row = mysqli_fetch_array($query, MYSQLI_NUM))
    {
        //var_dump($row);
        array_push($arr, $row);
    }
    foreach ($arr as $key => $value) {
        array_push($var, $value[0], $value[1]);
    
    }
    $materias = implode("," ,$var);
    echo $materias;
    //$var = implode(",", $arr);
    //echo $var;
    //echo json_encode($var); 

        

?>