<?php
  require("config/config.php");
  require("lib/db.php");
  $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
  $sql = "INSERT INTO comment (userName, writtenTime, comment) VALUES('".$_POST['userName']."',now(),'".$_POST['comment']."')";
  $result = mysqli_query($conn, $sql);
 header('Location: http://localhost:8080/Rosie/project.php');
 ?>
