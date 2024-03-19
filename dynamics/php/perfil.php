<?php
    //ini_set('display_errors', 1); 
    setcookie("Nombre", "Andreco");
    //var_dump($_COOKIE['Nombre']);
    $cookie = $_COOKIE['Nombre'];
    include("./config.php");
    $nombre = $_COOKIE['Nombre'];
    $conexion = connect();
    $peticion = "SELECT email, usuario.numcuenta, nombre FROM usuariohasmateria 
                INNER JOIN materia ON materia.id_materia = usuariohasmateria.id_materia 
                INNER JOIN usuario ON usuario.numCuenta = usuariohasmateria.numCuenta 
                WHERE nombre LIKE '$nombre'";

    
    $array = [];
    $arrayDatos = [];
    $results = [];
    $datos;
    $datos1;
    $datos2;
    $datos3;
    $i=0;
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    while($row = mysqli_fetch_array($query, MYSQLI_NUM))
    {
        //var_dump($row);

        $array[$i]=$row;
        $i++;
    }

    //var_dump($array);
    //datos1 = Correo del usuario
    $datos1 = $array[0][0];
    array_push($results, $datos1);
    //datos 2 = numero de cuenta 
    $datos2 = $array[0][1];
    array_push($results, $datos2); 
    // daot 3= nombre del usuario
    $datos3 = $array[0][2];
    array_push($results, $datos3);


    /*PETICION PARA DATOS QUE DOMINA */
    //echo "<br><br><br>";
    $materias = 
    $peticion2 = "SELECT materia FROM usuariohasmateria 
                    INNER JOIN materia ON materia.id_materia = usuariohasmateria.id_materia 
                    INNER JOIN usuario ON usuario.numCuenta = usuariohasmateria.numCuenta 
                    WHERE nombre LIKE '$nombre'";
    mysqli_real_escape_string($conexion, $peticion2);
    $query = mysqli_query($conexion, $peticion2);
    while($row = mysqli_fetch_array($query, MYSQLI_NUM))
    {
        //var_dump($row);
        $materiaRow = $row[0]; 
        array_push($results, $materiaRow);
    }




    if(isset($_FILES['Archivo'])){
        //var_dump($_FILES);
        $arch_loc = $_FILES['Archivo']['tmp_name'];
        $arch = $_FILES['Archivo']['name'];
        $ext = pathinfo($arch, PATHINFO_EXTENSION);
        $ruta = '../../statics/img/perfil/'.$nombre.'.'.$ext;
        if($ext=='jpg' || $ext=='jpeg' || $ext=='png'){
            //echo "cumple la extension";
            rename($arch_loc, $ruta);
        }
    }else{
        //echo "AA";
    }  
    //return $results;
    echo json_encode($results);
    //header("Location: ../../templates/perfil.html");

?>