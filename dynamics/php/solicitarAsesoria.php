<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../../statics/styles/solicitarAsesoria.css" rel="stylesheet" type="text/css">
    <title>Document</title>
</head>
<body id='body'>
    
    <?php
        include("./SessionAssign.php");
        phpSession();
        $numCuentaAl = $_SESSION["name"]; 
        $materia = $_POST["numMat"];
        //$materia = 1;
        $k = 0;
        include("./config.php");
        $conexion = connect();
        $peticion = "SELECT * FROM usuariohasmateria
                    INNER JOIN materia ON materia.id_materia = usuariohasmateria.id_materia
                    INNER JOIN usuario ON usuario.numCuenta = usuariohasmateria.numCuenta
                    WHERE materia.id_materia = $materia";
        //var_dump($peticion);
        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        //var_dump($query);
        while($row = mysqli_fetch_array($query))
        {

            $i = 1;
            $numCuenta = $row["numCuenta"];
            $peticion2 = "SELECT * FROM usuariohashorarios
                        INNER JOIN horario ON horario.id_horario = usuariohashorarios.id_horario
                        WHERE numCuenta = $numCuenta";
            mysqli_real_escape_string($conexion, $peticion2);
            $query2 = mysqli_query($conexion, $peticion2);
            echo "<div id='tabla'>";
                echo "<img src='".$row["rutaImagen"]."' alt='Imagen de perfil' id='foto'>";
                echo "<br>";
                echo "<div id='info'>";
                echo "<p id='nombre'>".$row["nombre"]."</p>";
                echo "<br>";
                echo "<p id='horarioText'>Horarios</p>";
                echo "<br>";
                echo "<form id='form".$k."' class='formulario'>";
                    echo "<div id='horarios'>";
                    while($row2 = mysqli_fetch_array($query2))
                    {
                        echo "<br>";
                        echo "Horario ".$i.": ";
                        echo $row2["horaInicio"];
                        echo " - ";
                        echo $row2["horaFinal"];
                        echo "<input type='radio' name='horario' value='".$row2["id_horario"]."'>";
                        echo "<br>";
                        $i++;
                    }
                    echo "</div>";
                    echo "<div id='modalidad'>";
                    echo "<p id='modalidadText'>Modalidad</p>";
                    echo "<label for='linea'>";
                        echo "En linea:<input type='radio' name='modalidad' value='1' id='linea'>";
                    echo "</label>";
                    echo "<label for='presencial'>";
                        echo "Presencial:<input type='radio' name='modalidad' value='2' id='presencial'>";
                    echo "</label>";
                    echo "</div>";
                    echo "<br>";
                    echo "<div id='asesoria'>";
                    echo "<label><p id='asesoriaText'>Dia de la asesoria:</p> ";
                        echo "<input type='date' name='dia' id='inputDia'>";
                    echo "</label>";
                    echo "</div>";
                    echo "<input type='hidden' name='numCuentaAs' value='".$numCuenta."'>";
                    echo "<input type='hidden' name='materia' value='".$materia."'>";
                    echo "<input type='hidden' name='numCuentaAl' value='".$numCuentaAl."'>";
                    echo "<span class='boton'>Solicitar</span>";
                echo "</form>";
                echo "</div>";
            echo "</div>";
            $k++;
        }
    ?>
    <script src="../js/solicitarAsesoria.js"></script>
</body>
</html>