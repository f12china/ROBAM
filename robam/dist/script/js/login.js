"use strict";!function(e){var o=e("#userName"),r=e("#pwd");e("#dengru").on("click",function(){var a=o.val(),t=r.val();e.ajax({type:"post",url:"http://localhost/items1905xsc/ROBAM/robam/php/login.php",data:{userName:a,repwd:t},dataType:"json",success:function(a){a?location.href="home.html":alert("用户名或密码错误")}})})}(jQuery);