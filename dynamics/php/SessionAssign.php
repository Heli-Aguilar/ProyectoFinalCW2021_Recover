<?php
    include("./config.php");
    include("./security.php");
    $con=connect();
    
    phpSession();

    $name="SELECT nombre FROM usuario WHERE email='".$_POST["mail"]."'";
    $cypherAccount="SELECT numCuenta FROM usuario WHERE email='".$_POST["mail"]."'";

    $r=mysqli_query($con, $name);
    $r2=mysqli_query($con, $cypherAccount);

    $encripted=mysqli_fetch_array($r2, MYSQLI_NUM);
    $gotName=mysqli_fetch_array($r, MYSQLI_NUM);

    $account=encrypt($encripted[0], true);
    $_SESSION["init"]=true;
    $_SESSION["mail"]=$_POST["mail"];
    $_SESSION["name"]=$gotName[0];
    $_SESSION["cuenta"]=encrypt($encripted[0], true);

    header("location: ../../Index.html");

?>