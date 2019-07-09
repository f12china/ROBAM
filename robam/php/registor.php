<?php
header('content-type:textml;charset=utf-8');
require "conn.php"; 
if (isset($_POST['userName'])) {
    $userName = $_POST['userName'];
    $result = $conn->query("select * from zc where userName='$userName'");
    if ($result->fetch_assoc()) {
        echo 'true';
    } else {
        echo 'false';
    };
} else {
    exit('非法操作'); //退出并打印出内部的信息
};

if (isset($_POST['submit'])) {
    echo 1;
    $userName = $_POST['userName'];
    echo  $userName;
    $phone = $_POST['phone'];
    $repwd = sha1($_POST['repwd']);
    $email=sha1($_POST['email']);
    $phone = $_POST['phone'];
   $conn->query("INSERT zc VALUES (NULL, '$userName', '$repwd', '$email','$phone',NOW())");
echo '<script> location.href = "http://localhost/items1905xsc/ROBAM/robam/src/login.html"</script>';
};
?>

