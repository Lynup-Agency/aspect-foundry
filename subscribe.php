<?php
/** NOTE: Be sure to change the name of the txt file to something more secure and update it below*/
$subscribersList = "subscribers.txt";
/** enter your email address.  You will receive a notification email when a user subscribes to your list*/
$adminEmail = "yourname@emailaddress.com";

/** do not edit anything below unless you know what you're doing*/
function GetField($input) {
    $input=strip_tags($input);
    $input=str_replace("<","<",$input);
    $input=str_replace(">",">",$input);
    $input=str_replace("#","%23",$input);
    $input=str_replace("'","`",$input);
    $input=str_replace(";","%3B",$input);
    $input=str_replace("script","",$input);
    $input=str_replace("%3c","",$input);
    $input=str_replace("%3e","",$input);
    $input=trim($input);
    return $input;
} 

/**E-mail Validation*/
function validEmail($email)
{
   $isValid = true;
   $atIndex = strrpos($email, "@");
   if (is_bool($atIndex) && !$atIndex)
   {
      $isValid = false;
   }
   else
   {
      $domain = substr($email, $atIndex+1);
      $local = substr($email, 0, $atIndex);
      $localLen = strlen($local);
      $domainLen = strlen($domain);
      if ($localLen < 1 || $localLen > 64)
      {
         $isValid = false;
      }
      else if ($domainLen < 1 || $domainLen > 255)
      {
         $isValid = false;
      }
      else if ($local[0] == '.' || $local[$localLen-1] == '.')
      {
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $local))
      {
         $isValid = false;
      }
      else if (!preg_match('/^[A-Za-z0-9\\-\\.]+$/', $domain))
      {
         $isValid = false;
      }
      else if (preg_match('/\\.\\./', $domain))
      {
         $isValid = false;
      }
      else if
(!preg_match('/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/',
                 str_replace("\\\\","",$local)))
      {
         if (!preg_match('/^"(\\\\"|[^"])+"$/',
             str_replace("\\\\","",$local)))
         {
            $isValid = false;
         }
      }
   }
   return $isValid;
}

$email 	= GetField($_GET['email']);
$name 	= GetField($_GET['name']);
$pass 	= validEmail($email);

if ($pass) {
	$f = fopen($subscribersList, 'a+');
	$read = fread($f,filesize($subscribersList));
	if (strstr($read,$email,$name)) { 
		echo 3;
	} else {
		fwrite($f, "$name" . "," . "$email" . ";");
		$to      = $adminEmail;
		$subject = 'A new user has subscribed to your mailing list';
		$message = "Name: ".$name."\r\n"."Email: ".$email."\r\n";
		mail($to, $subject, $message);
	echo 1;
	}
	fclose($f);
} else {
	echo 2;
}
?>