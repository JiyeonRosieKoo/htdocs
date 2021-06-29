<?php
require("config/config.php");
require("lib/db.php");
$conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
$result = mysqli_query($conn, "SELECT * from login");
?>

<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>LogIn Page</title>
  </head>
  <body>
    <form action="process4.php" method="post">
      <div class="logging">
        <p>ID &nbsp;&nbsp;: <input type="text" name="userName" class="userId"></p>
        <p>PW : <input type="text" name="pw"></p>
        <button type="submit" class="btn btn-success">로그인</button>
      </div>
    </form>
  </body>
</html>
