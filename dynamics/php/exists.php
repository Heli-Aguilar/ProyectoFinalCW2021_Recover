<?php
    include("./config.php");
    $con=connect();
    $mail="";
    $rowCount=0;
    //Se extrae el valor enviado del input de correo
    foreach($_POST as $key => $value)
    {
        if($key=="mail")
        {
            $mail=$value;
        }
    }
    $checkMail="SELECT * FROM usuario WHERE email='".$mail."'";

    //Se verifica si existe el correo en la base
    if($r=mysqli_query($con, $checkMail))
    {
        $rowCount=mysqli_num_rows($r);
    }
    //En caso de existir, devuelve al js que el correo está ocupado
    if($rowCount>0)
    {
        echo "existent";
    }
    else
    {
        echo "fine";
    }

?>