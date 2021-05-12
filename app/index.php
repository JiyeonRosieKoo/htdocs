<?php
require("config/config.php");
require("lib/db.php");
$conn = db_init($config['host'], $config['duser'],$config['dpw'],$config['dname']);
$result = mysqli_query($conn, "SELECT * from topic");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<link rel="stylesheet" type="text/css" href="http://localhost:8080/style.css">
	<link href="http://localhost:8080/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
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
			  <article>
			    <?php
					error_reporting(0);
			    if(empty($_GET['id'] == false)){
						$sql = "SELECT * FROM topic WHERE id=".$_GET['id'];
			      $result = mysqli_query($conn, $sql);
			      $row = mysqli_fetch_assoc($result);
			      echo "<h2>".htmlspecialchars($row['title'])."</h2>";
			      echo strip_tags($row['description'],'<img>'); //img 태그만 허용!! escaping
			    }
			     ?>
			  </article>
			</div>
		</div>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	    <!-- Include all compiled plugins (below), or include individual files as needed -->
	    <script src="http://localhost:8080/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	</div>
</body>
</html>
