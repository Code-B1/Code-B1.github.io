<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$headers =  'From: no-reply@stormcn.co.uk' . "\r\n" . 
            'Reply-To: no-reply@stormcn.co.uk' . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n";

$message =  'Name : ' . $name . "\r\n" . 
            'Email : ' . $email . "\r\n" . 
            'Number : ' . $number . "\r\n" . 
            'Message : ' . $message;

$subject = 'Web Query From - ' . $name;

$toAddress = 'leon@stormcn.co.uk';

mail($toAddress,$subject,$message, $headers);

//echo "Mail sent successfully.";
?>