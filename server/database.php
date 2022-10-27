<?php
$HOST = 'localhost';
$USER = 'root';
$PASS = 170713;
$DBNAME ='mercado';


try{
$conn = new PDO("mysql:host=$HOST;port=33300 ;dbname=$DBNAME", $USER, $PASS);

}catch(Exception $erro){
    echo 'excessao capiturada:', $e->getMessage(), "\n";
}