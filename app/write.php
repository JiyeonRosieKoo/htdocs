<?php
 require("config/config.php");
 require("lib/db.php");
 $conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
 $result = mysqli_query($conn, "SELECT * from topic");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<link rel="stylesheet" type="text/css" href="http://localhost:8080/style.css">
	<link href="http://localhost:8080/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- file upload file API service -->
  <script>
  UPLOADCARE_PUBLIC_KEY = '32211a8360febc247b1c';
  </script>
  <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" charset="utf-8"></script>
  </script>
</head>
<body id="target">
  <div class="container">
		<header class="jumbotron text-center">
	    <img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/course/94.png" alt="생활코딩" class="img-circle" id="logo">
			<h1><a href="http://localhost:8080/app/index.php">JavaScript</a></h1>
		</header>
    <div class="row">
      <nav class="col-md-3">
        <ol class="nav nav-pills nav-stacked">
          <?php
          while($row = mysqli_fetch_assoc($result)){
            echo "<li><a href='http://localhost:8080/app/index.php?id=".$row['id']."'>".htmlspecialchars($row['title'])."</a></li><br />";
          }
           ?>
        </ol>
      </nav>
	<div class="col-md-9">
    <script src="http://localhost:8080/script_js.js"></script>
    <div id="control">
      <div class="btn-group" role="group" aria-label="...">
        <input type="button" value="White" id="white_btn" class="btn btn-default"/>
        <input type="button" value="Black" id='black_btn'class="btn btn-default"/>
      </div>
      <a class="btn btn-success" href="http://localhost:8080/app/write.php">write</a>
    </div>
  </br>
    <form action="process.php" method="POST">
      <div class="form-group">
        <label for="exampleInputEmail">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail" placeholder="title" name="title">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" name="author">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail">Description</label>
        <textarea class="form-control" name="description" id="description"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="hidden" role="uploadcare-uploader" name="my_file">
        <input type="submit" class="btn btn-default" value="Write">
      </div>
      </div>
    </form>
    <script>
      var singleWidget = uploadcare.SingleWidget('[role=uploadcare-uploader]'); //업로드 케어 서비스 '서버'에 upload된 사진을 사용하는 것.
        singleWidget.onUploadComplete(function(info){
        document.getElementById('description').value = document.getElementById('description').value+'<img src="'+info.cdnUrl+'">';
        //'<img src="'+info.cdnUrl+'">';
       singleWidget.value();// 실행
      });
    </script>
  </div>
  </div>
</div>
</body>
</html>
