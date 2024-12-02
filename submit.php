<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer autoload (Composer se install kiya hai to)
require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form fields ko retrieve karna
    $name = htmlspecialchars(trim($_POST['name']));
    $mobile = htmlspecialchars(trim($_POST['mobile']));
    $email = htmlspecialchars(trim($_POST['email']));

    // PHPMailer ka instance banaiye
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'rajpatel8726@gmail.com'; // Aapka Gmail address
        $mail->Password = 'mtms jncw xlfg aatp'; // Gmail password ya App password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Sender and receiver settings
        $mail->setFrom('rajpatel8726@gmail.com', 'Raj Patel'); // Sender email
        $mail->addAddress('rajpatel8726@gmail.com'); // Receiver email

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Enquiry Received';
        $mail->Body = "
            <h1>Enquiry Details</h1>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Mobile:</strong> $mobile</p>
            <p><strong>Email:</strong> $email</p>
        ";

        // Send email
        $mail->send();

        // Redirect to thank-you page
        header('Location: thank-you.html'); // Thank-You page ka URL
        exit; // Ensure further code execution stops
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
