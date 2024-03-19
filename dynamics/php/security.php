<?php
    define('PASSWD', 's0mP4ssWordDto3ncYptr@?++');
    define('HASH', 'sha256');
    define('METHOD', 'aes-128-cbc');
    
    function phpSession ()
    {
        session_name("profile");
        session_start();
    }
    function destroySession()
    {
        session_unset();
        session_destroy();
    }
    
    function validateSession()
    {
        if(!(isset($_SESSION["init"])))
        {
            header("location: ../../templates/creaCuenta.html");
        }
        return false;
    }
    //Función que en caso de tener una sesión activa no te deja crear una nueva cuenta o iniciar una nueva sesión
    function validateNotSession()
    {
        if((isset($_SESSION["init"])))
        {
            header("location: ../../index.html");
        }
        return true;
    }
    //Función que no te permite acceder a ciertas vistas si no tienes el permiso adecuado
    function validatePermissions($permit)
    {
        if($permit!='all')
        {
            if($permit=='Admin'&&$_SESSION["tipoUsuario"]=='student')
            {
                header("location: ../../Index.html");
            }
        }
        
    }

    //Función que se encarga de hacer la encriptación y desencriptación de los datos de la base
    //En el parámetro data se introduce la información a encriptar que viene de la petición http o la información a desencriptar que viene de la base
    function encrypt($data, bool $decrypt=false)
    {
        $key = openssl_digest(PASSWD, HASH);
        $vecLenght = openssl_cipher_iv_length(METHOD);
        $vec = openssl_random_pseudo_bytes($vecLenght);
        if($decrypt)
        {
            $decypher=openssl_decrypt($data, METHOD, $key, OPENSSL_RAW_DATA, $vec);
            //En caso de desencriptar, regresa un resultado que puede ser imprimible
            return $decypher;
        }
        else
        {
            $cypher=openssl_encrypt($data, METHOD, $key, OPENSSL_RAW_DATA, $vec);
            //En caso de encriptar, devuelve un resultado que debe almacenarse en la base de datos
            return $cypher;
        }
    }
    function saltNpepper()
    {
        $salt=''; 
        $pepper=''; 
        $toPush='';
        $randChar=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','.','!','¿','*','+','$','%','&','0','1','2','3','4','5','6','7','8','9'];
        //Se genera la sal de 18 caracteres
        for($i=0; $i<18; $i++)
        {
            $upOrlow = rand(0,1);
            $random = rand(0, 44);
            if($random<=25&&$upOrlow==0)
            {
                $toPush=strtolower($randChar[$random]);
                $salt.=$toPush;
            }       
            else
            {   
                $salt.=$randChar[$random];
            }     
        }
        //Se genera la pimienta de 4 caracteres
        for($y=0;$y<4;$y++)
        {
            $random2 = rand(0,25);
            $pepper.=$randChar[$random2];
        }
        return $salt.','.$pepper;
    }
    //Función que genera un hash a una contraseña nueva o descifra la pimienta de una existente
    //Al Hashear una contraseña nueva también devuelve la sal que se ha usado par poder ser almacenada después
    function hashUnhash(string $pw, bool $unhash=false, $salt='', $compare='')
    {
        //Valida un hash existente con el introducido, además de descifrar la pimienta
        if($unhash)
        {
            $i=0;
            $hashCompare='';
            $ultimate='';
            $abc=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            while($hashCompare!=$compare&&$i<26)
            {
                $y=0;
                while($hashCompare!=$compare&&$y<26)
                {
                    $j=0;
                    while($hashCompare!=$compare&&$j<26)
                    {
                        $n=0;
                        while($hashCompare!=$compare&&$n<26)
                        {
                            $pim=$abc[$i].$abc[$y].$abc[$j].$abc[$n];
                            $toHash=$pw.$salt.$pim;
                            $hashCompare = openssl_digest($toHash,HASH);
                            $n++;
                        }
                        $j++;
                    }
                    $y++;
                }
                $i++;
            }
            //En caso de que no se haya encontrado una coincidencia, devuelve un dato inválido
            if($hashCompare!=$compare)
            {
                $hashCompare=false;
            }
            return $hashCompare;
        }
        //En caso de no especificar que se desea validar un hash existente, crea uno nuevo
        else
        {
            $salpim=explode(',',saltNpepper());
            $full=$pw.$salpim[0].$salpim[1];
            $hash=openssl_digest($full, HASH);
            return $hash.','.$salpim[0];
        }
    }
    //Ejemplo de uso xd
    // $ha=hashUnhash('ola');
    // $data=explode(',', $ha);
    // var_dump(encrypt('ola'));
    //var_dump($ha)
?>