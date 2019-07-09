<?php
header('content-type:textml;charset=utf-8');
require "conn.php"; 

if (isset($_POST['userName'])&& isset($_POST['repwd'])) {
    $userName = $_POST['userName'];
    $repwd =sha1($_POST['repwd']);
    $result = $conn->query("select * from zc where userName='$userName' and repwd='$repwd'");
    if ($result->fetch_assoc()) {
        echo 'true';
    } else {
        echo 'false';
    };
} else {
    exit('非法操作'); //退出并打印出内部的信息
};
//echo '<script> location.href = "http://10.31.158.51/items1905xsc/ROBAM/robam/src/home.html"</script>';
?>