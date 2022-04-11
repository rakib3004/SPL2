 <?php
 include "config.php";
 $videoData = mysqli_query($con, "SELECT * FROM Video Info");
 $data = array();
 while($row = mysqli_fetch_assoc($videoData)){
     $data[] = array(
         "v_id" => $row['video_id'],
         "v_title" => $row['video_title'],
         "v_topic" => $row['video_topic']
     );
 }