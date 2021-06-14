<?php
  require("config/config.php");
  require("lib/db.php");
  $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
  $sql = "SELECT id FROM login ORDER BY id DESC LIMIT 1";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
 header('Location: http://localhost:8080/Rosie/index.php?id='.$row['id']);
 ?>
