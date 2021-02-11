<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$formcontent="From: $name \n Message: $message";
$recipient = "vincent.bezault@icloud.com";
$subject = "New mail from Website";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Message sent!";
?>