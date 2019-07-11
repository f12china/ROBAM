<?php  
	
	require "conndata.php";

	if(isset($_GET['id'])){
		$id=$_GET['id'];
		$result=$conn->query("select * from product where id=$id");
		echo json_encode($result->fetch_assoc());
		
	}