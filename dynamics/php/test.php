<?php
    include("./security.php");

    phpSession();

    var_dump($_SESSION["cuenta"]);
    var_dump($_SESSION["mail"]);
    var_dump($_SESSION["name"]);

    define('PASSW', 's0mP4ssWordDto3ncYptr@?++');
    define('HAS', 'sha256');
    define('METHO', 'aes-128-cbc');

    $key = openssl_digest(PASSW, HAS);
    $vecLenght = openssl_cipher_iv_length(METHO);
    $vec = openssl_random_pseudo_bytes($vecLenght);

    $test=encrypt("jelo");
    $dec=openssl_decrypt($test, METHO, $key, OPENSSL_RAW_DATA, $vec);

    var_dump($test);
    echo "<br>";
    var_dump($dec);


?>