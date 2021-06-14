<?php
  require("config/config.php");
  require("lib/db.php");
  $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
  $sql = "INSERT INTO login (userName, pw, signed) VALUES('".$_POST['userName']."','".$_POST['pw']."',now())";
  $result = mysqli_query($conn, $sql);
 header('Location: http://localhost:8080/Rosie/process3.php');
 ?>
