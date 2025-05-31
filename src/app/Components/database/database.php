<!-- http://185.27.134.10/db_structure.php?db=ezyro_32686805_pdtbase -->

<?php

// use below commented code for live database

// $server = "sql305.ezyro.com";
// $db = "ezyro_32686805_pdtbase";
// $uname = "ezyro_32686805";
// $password = "3hivby6jxbvkbh";

// $server = "localhost:3306";
// $db = "productbase";
// $uname = "root";
// $password = "root";

// $con = mysqli_connect($server, $uname, $password, $db);

// if($con)
// {
//     echo "<script>alert('success')</script>";
// }
// else {
//     echo "<script>alert('not success')</script>";
// }


$server = "127.0.0.1";
$db = "product";
$uname = "root";
$password = "root";

$con = mysqli_connect($server, $uname, $password, $db);

if($con)
{
    print_r($con);
    echo "<script>alert('success')</script>";
    // echo "<script>console.log('success')</script>";
    $sql = "Select * from products_ava";
    $q = mysqli_query($con, $sql);
    while($st = mysqli_fetch_assoc($q)){
        echo "Name: ".$st['pName'];
        echo "Name: ".$st['pModel'];
    }
}
else {
    echo "<script>console.log('not success')</script>";
    echo "<script>alert('not success')</script>";
}
