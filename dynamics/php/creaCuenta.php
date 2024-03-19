<?php
    include("./security.php");
    include("./config.php");
    $con=connect();
    $encrypt=[];
    $register=[];
    //Encripta los datos del usuaria a excepción de su nombre y correo
    foreach($_POST as $key => $value)
    {
        if($key!="ApPat"&&$key!="ApMat"&&$key!="Nombre"&&$key!="contraseña"&&$key!="correo")
        {
            array_push($encrypt, encrypt($value));
        }
        //La contraseña no se encripta completamente, sólo se le realiza el hash
        elseif($key=="contraseña")
        {
            $full=hashUnhash($value);
            $data=explode(',', $full);
            array_push($encrypt, $data[0]);
            array_push($encrypt, $data[1]);
        }
        else
        {
            array_push($register, $value);
        }
    }
    $name=$register[0]." ".$register[1]." ".$register[2];
    $registUser="INSERT INTO usuario (numCuenta, email, numTelefono, contraseña, sal, nombre) VALUES ('".$encrypt[3]."', '".$register[3]."','".$encrypt[0]."', '".$encrypt[1]."', '".$encrypt[2]."', '".$name."')";
    $secure=mysqli_real_escape_string($con,$registUser);
    $registEncrypt=mysqli_query($con, $registUser);
    //Si el registro se ha realizado con éxito, te permite continuar el proceso.
if($registEncrypt)
{  
    phpSession();

    $name="SELECT nombre FROM usuario WHERE email='".$register[3]."'";
    $cypherAccount="SELECT numCuenta FROM usuario WHERE email='".$register[3]."'";

    $r=mysqli_query($con, $name);
    $r2=mysqli_query($con, $cypherAccount);

    $encripted=mysqli_fetch_array($r2, MYSQLI_NUM);
    $gotName=mysqli_fetch_array($r, MYSQLI_NUM);

    $account=encrypt($encripted[0], true);

    $_SESSION["init"]=true;
    $_SESSION["mail"]=$register[3];
    $_SESSION["name"]=$gotName[0];
    $_SESSION["cuenta"]=encrypt($encripted[0], true);
    header("Location: ../../templates/registroMaterias.html");
}
else
{
    echo "Algo salió mal";
}    
?>