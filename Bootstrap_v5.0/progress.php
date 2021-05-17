<?php
  require("config/config.php");
  require("lib/db.php");
  $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
 $sql = "INSERT INTO delivery (email, password) VALUES('".$_POST['email']."','".$_POST['password']."')";
 $result = mysqli_query($conn, $sql);
 header('Location: http://localhost:8080/Bootstrap_v5.0/login.php');
 ?>
