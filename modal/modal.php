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
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script src="node_modules/toastify-js/src/toastify.js" charset="utf-8"></script>
    <title>Modal Example</title>
  </head>
  <body>
    <h2>회원가입!!</h2>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      SignIn
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Guest 회원가입</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="process.php" method="post" name="sendForm">
            <div class="modal-body">
              <div class="form1">
                <p>사이트를 이용하는 동안 게시글 & 덧글 등의 기능을</p>
                <p>사용하기 위하여 Business info 상태로 로그인을 유지해 주세요!</p>
              </div>
              <hr>
              <p>ID와 Password를 입력해주세요.</p>
              <p>ID &nbsp;&nbsp;: <input type="text" name="userName" class="userId"></p>
              <p>PW : <input type="text" name="pw"></p>
            </div>
            <div class="modal-footer">
              <a href="./login.php"><button type="button" class="btn btn-warning">LogIn Page로 이동</button></a>
              <button type="submit" class="btn btn-success">적용</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <h5>
        <?php
        error_reporting(0);
        if(empty($_GET['id'] == false)){
          $sql = "SELECT * FROM login WHERE id=".$_GET['id'];
          $result = mysqli_query($conn, $sql);
          $row = mysqli_fetch_assoc($result);
          echo "<p class='result'>".$row['userName']."님 환영합니다!</p>"; //img 태그만 허용!! escaping
        }
         ?>
      </h5>
    </div>
    <script src="./main.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
  </body>
</html>
