<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../../statics/styles/confirmAsesoria.css" rel="stylesheet" type="text/css">
    <title>Document</title>
</head>
<body>
    <?php
        include("./SessionAssign.php");
        phpSession();
        $numCuenta = $_SESSION["name"];
        include("./config.php");
        $conexion = connect();

        $peticion = "SELECT * FROM asesoriahasusuario
                    INNER JOIN asesoria ON asesoria.id_asesoria = asesoriahasusuario.id_asesoria
                    INNER JOIN usuario ON usuario.numCuenta = asesoriahasusuario.NumCuenta
                    WHERE usuario.nombre = $numCuenta AND ubicacion LIKE 'pendiente'";
        mysqli_real_escape_string($conexion, $peticion);
        $query = mysqli_query($conexion, $peticion);
        while($row = mysqli_fetch_array($query))
        {
           // var_dump($row);
            echo "<table border='1'>";
                echo "<tbody>";
                    echo "<tr>";
                        echo "<td class='id'>".$row["id_asesoria"]."</td>";
                        echo "<td>".$row["nombre"]."</td>";
                        echo "<td>".$row["añoInscripcion"]."</td>";
                        echo "<td>".$row["email"]."</td>";
                    echo "</tr>";
                echo "</tbody>";
            echo "</table>";
            echo "<span class='acept'>Aceptar </span>";
            echo "<span class='reject'>Rechazar </span>";
        }
    ?> 
    <script src="../js/confirmAsesoria.js"></script>
</body>
</html> 