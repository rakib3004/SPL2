<?php

include "connect_database.php"; 

$sql = "SELECT ID, Name, Username, Address, Phone, Password FROM user WHERE " . $key . " LIKE ". $value;
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "<br>";
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["ID"]. " - Name: " . $row["Name"]. " - Username " . $row["Username"]. " - Address " . $row["Address"]. " - Phone " . $row["Phone"]. " - Password " . $row["Password"]. "<br>";
  }
} else {
  echo "<br>0 results";
}

?>