<?
$name  = $_REQUEST["name"];
$email = $_REQUEST["email"];
$phone   = $_REQUEST["phone"];
$cname   = $_REQUEST["cname"];
$ventilation = $_REQUEST["ventilation"];
$fans = $_REQUEST["fans"];
$dust = $_REQUEST["dust"];
$conveying = $_REQUEST["conveying"];
$pollution = $_REQUEST["pollution"];
$bags = $_REQUEST["bags"];
$nfpa = $_REQUEST["nfpa"];
$other = $_REQUEST["other"];
$msg   = $_REQUEST["msg"];
$to    = "lancebeaudry@gmail.com"; /* <= Change this Email ID to yours */
if (isset($email) && isset($name) && isset($msg)) {
    $subject = "$name sent you a message via ias-mi.com"; /* <= Change the Subject If you want */
		$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= "From: ".$name." <".$email.">\r\n"."Reply-To: ".$email."\r\n" ;
$msg     = "From: $name<br/> Email: $email <br/>Message: $msg <br/>Industrial Ventilation: $ventilation <br/>Fans & Makeup Air: $fans <br/>Dust/Mist Collection: $dust <br/>Pneumatic Conveying: $conveying <br/>Air & Noise Pollution: $pollution <br/>Replacement Bags: $bags <br/>NFPA Compliance: $nfpa <br/>Other: $other";
	
   $mail =  mail($to, $subject, $msg, $headers);
  if($mail)
	{
		echo 'sent';
	}

else
	{
		echo 'failed';
	}
}

?>