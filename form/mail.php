<?php 
    require './vendor/autoload.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $email_subject = "Akira - Website Subs";

    $userEmail = $_POST['email'];

    $emailHost = "smtp.gmail.com";
    $emailPort = 465;
    $emailUsername = "automatic.noreplay@gmail.com";
    $emailPassword = "aO52Z3Wi3X&1";

    $email = new PHPMailer(true);

    try {
        $email->IsSMTP(); 
        // $email->SMTPDebug = 3;
        $email->From      = $emailUsername;
        $email->FromName  = 'Ckapur';
        // $email->addReplyTo($userEmail);
        
        $email->AddAddress('juli@estudionk.com'); 
        // $email->AddAddress('info@ckapur.com'); 
        $email->IsHTML(true);
        
        $email->Host = $emailHost;
        $email->SMTPAuth = true;
        $email->Port = $emailPort; 
        $email->SMTPSecure = 'ssl';
        $email->Username = $emailUsername;
        $email->Password = $emailPassword;
                
        $email->Subject = $email_subject;
        $email->Body = "
            <p><strong>Email</strong>: ".$userEmail."</p>
        ";

        $email->Send();

        echo $userEmail;
    } catch (Exception $e) {
        var_dump($e);
    }

?>