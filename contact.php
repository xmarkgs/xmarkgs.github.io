<?php
    $name = POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);
    $name = urldecode($name);
    $email = urldecode($email);
    $message = urldecode($message);
    $name = trim($name);
    $email = trim($email);
    $message = trim($message);
    //echo $name;
    //echo "<br>";
    //echo $email;
    if (mail("markozhyvotkov@gmail.com", "Message from Portfolio", "Name:".$name.". E-mail: ".$email". Message:".$message" " ,"From: mraner123@gmail.com \r\n"))
    {     echo "Message sent successfully";
    } else {
        echo "Something went wrong...";
?>