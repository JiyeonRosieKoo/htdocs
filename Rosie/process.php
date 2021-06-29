<?php
  require("config/config.php");
  require("lib/db.php");
  $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
 $sql = "INSERT INTO book (userName, title, description, created) VALUES('".$_POST['userName']."','".$_POST['title']."','".$_POST['description']."',now())";
 $result = mysqli_query($conn, $sql);
 header('Location: http://localhost:8080/Rosie/app.php?id=1');
 ?>
