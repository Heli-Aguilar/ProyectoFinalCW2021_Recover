<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin :D</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link href="../../statics/styles/admin.css" rel="stylesheet" type="text/css"/>
</head>
<body id='body'>
<div id="navbar" class="navClass">
        <div id="logo" class="navClass"><img id="logoImg" src="../../statics/img/logoNav.png" alt="Logo enp6" ></div>
        <div id="nav_colegios" class="navClass"></div>
        <div id="inicioSesion" class="navClass"><p id="sesionText">Iniciar Sesión/Registrarse</p></div>
        <div id="perfil" class="navClass"><img id="imgPerfil" src="../../statics/img/perfil.png" alt="" width="80px" height="80px" ></div>       
        <label class="switch">
          <input type="checkbox" id="check" checked>
          <span class="slider round">
            <img src="../../statics/img/sun.png"alt="sol"  id="sun">
            <img src="../../statics/img/moona.png"alt="luna"  id="moon">
          </span>
        </label>  
        <div id="logo_blanco"><img src="../../statics/img/blancol.PNG" id="logoImgb" alt="logo claro"></div>     
  </div>
  <div id='bordeForm'></div>
  <div id='linea'></div>
    <div id="divPHP">

        <?php
            $nombre = $_SESSION["name"];
            include("./config.php");
            $conexion = connect();
            $peticion = "SELECT * FROM usuario
                        WHERE usuario LIKE '%$nombre%'";
            $query = mysqli_query($conexion, $peticion);
            while($row = mysqli_fetch_array($query))
            {
                $id_tipoUsuario = $row["id_tipoUsuario"];
            }
            if($id_tipoUsuario == 2)
            {
                echo "<form id='formUsuario'>
                    <p id='buscarText'>Buscar nombre: </p><input type='text' name='usuario'>
                    <span id='buscar'>Buscar</span>
                </form>";
            }
            else
            {
                echo "<h1>NO TIENES PERMISO PARA ESTA PAGINA NO SOS ADMIN</h1>";
            }
        ?>
    </div>
   
    <script src="../js/admin.js"></script>
</body>
</html>