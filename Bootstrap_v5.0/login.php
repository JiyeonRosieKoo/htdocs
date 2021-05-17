<?php
require("config/config.php");
require("lib/db.php");
$conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
$result = mysqli_query($conn, "SELECT email FROM delivery ORDER BY id DESC");
 ?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewpoint" content="width=device-width">
    <link rel="stylesheet" href="./main.css">
    <title>bootStrap - v 5.0</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

  </head>
  <body>
    <!--메뉴 상단-->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Dlivery Service</a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search for food" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="Menu">
      <aside id="sideMenu"> Food 메뉴
        <ul id="list">
          <li>한식</li>
          <li>분식</li>
          <li>카페-디저트</li>
          <li>일식</li>
          <li>치킨</li>
          <li>피자</li>
          <li>중국집</li>
          <li>족발-보쌈</li>
          <li>야식</li>
          <li>찜.탕</li>
          <li>도시락</li>
          <li>패스트푸트</li>
          <li>채식</li>
        </ul>

      </aside>
      <section id="contents">
        <?php
        $row = mysqli_fetch_assoc($result);
        echo "안녕하세요. ".$row['email']."님. 환영합니다 ^^";
         ?>
        <button type="submit" class="btn btn-primary">
        <a href="./index.php" />Back</button>
      </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
  </body>
</html>
