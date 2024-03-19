<?php
    include("./config.php");
    include("./security.php");
    $con=connect();
    $mail="";
    $pw="";
    $rowCount=0;
    $right=false;
    //Se extrae el valor enviado del input de correo
    foreach($_POST as $key => $value)
    {
        if($key=="mail")
        {
            $mail=$value;
        }
        elseif($key=="pw")
        {
            $pw=$value;
        }
    }
    $checkMail="SELECT * FROM usuario WHERE email='".$mail."'";
    $compare="SELECT contraseña FROM usuario WHERE email='".$mail."'";
    $salt="SELECT sal FROM usuario WHERE email='".$mail."'";

    //Se verifica si existe el correo en la base
    if($r=mysqli_query($con, $checkMail))
    {
        $rowCount=mysqli_num_rows($r);
    }
    //En caso de existir, compara la contraseña
    if($rowCount>0)
    {
        $r2=mysqli_query($con, $compare);
        $r3=mysqli_query($con, $salt);

        $hash=mysqli_fetch_array($r2, MYSQLI_NUM);
        $hashSalt=mysqli_fetch_array($r3, MYSQLI_NUM);
        $compared=hashUnhash($pw, true, $hashSalt[0], $hash[0]);
        if($compared)
        {
            echo "fine";
        }
        else
        {
            echo "noGood";
        }
    }
    else
    {
        echo "notExistent";
    }

?>