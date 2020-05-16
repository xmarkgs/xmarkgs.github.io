<?php
    ini_set('display_errors','On');
    error_reporting('E_ALL');
    $name = $_POST['name'];
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
    if (mail("markozhyvotkov@gmail.com", "Message from Portfolio", "Name:$name. E-mail:$email. Message:$message","From: markozhyvotkov@gmail.com \r\n"))
    {     echo "Message sent successfully";
    } else {
        echo "Something went wrong...";
    }
?>