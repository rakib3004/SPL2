  <?php

include "connect_database.php"; 

$Name = $_GET["Name"];
$email = $_GET["Email"];
$address = $_GET["Address"];
$phone = $_GET["Phone"];
$username = $_GET["Username"];
$password = $_GET["Password"];

echo "Trying to Add User : " . $Name . " ". $username ." ". $password ." ". $address ." ". $phone ." ".  $email;
$sql = "INSERT INTO user (ID, Name, Username,  Password, Address, Phone, Email) 
	VALUES (NULL, '$Name', '$username', '$password', '$address', '$phone',  '$email')";

$result = $mysqli->query($sql);
if ($mysqli->query($sql) === TRUE) {
  echo "Succesfully Added User : " . $Name . " ". $username ." ". $password ." ". $address ." ". $phone ." ".  $email;
} else {
  echo "Error: " . $sql . "<br>" . $mysqli->error;
}


$mysqli->close();

?>