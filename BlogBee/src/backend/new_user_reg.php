<?php
$form = "<?php
echo "<form action=\"add_user.php\">
  <label for=\"Name\">Name:</label><br>
  <input type=\"text\" name=\"Name\"><br>

  <label for=\"Email\">Email:</label><br>
  <input type=\"text\" name=\"Email\"><br>

  
  <label for=\"Address\">Address:</label><br>
  <input type=\"text\" name=\"Address\"\"><br>

  <label for=\"Phone\">Phone:</label><br>
  <input type=\"text\" name=\"Phone\"><br>
	

  <label for=\"Username\">Username:</label><br>
  <input type=\"text\" name=\"Username\"><br>
	
  <label for=\"Password\">Password:</label><br>
  <input type=\"text\" name=\"Password\"><br>
   

  <input type=\"submit\" value=\"Submit\">
</form>"

echo $form;

?>