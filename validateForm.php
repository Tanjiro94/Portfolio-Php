<?php

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


    if(isset($_POST["prenom"], $_POST["nom"], $_POST["email"], $_POST["objet"], $_POST["message"])){
        $prenom = $_POST["prenom"];
        $nom = $_POST["nom"];
        $email = $_POST["email"];
        $objet = $_POST["objet"];
        $message = $_POST["message"];
        
        
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();                                  
            $mail->Host = 'smtp.gmail.com';                      
            $mail->SMTPAuth = true;                             
            $mail->Username = 'salahdinbenaouda@gmail.com';  
            $mail->Password = 'jlpq zvda gdzc bcvz';               
            $mail->Port = 465;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                                  

            $mail->setFrom('salahdinbenaouda@gmail.com', 'Benaouda');
            $mail->addAddress($email, $nom);                            

            $mail->isHTML(true);                           
            $mail->Subject = $objet;
            $mail->Body    = $message;

            $mail->send();
            header("Location: contact.php?status=success");
        } catch (Exception $e) {
            header("Location: contact.php?status=error?");
        }
    }







