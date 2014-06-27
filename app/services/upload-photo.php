<?php
  header('Access-Control-Allow-Origin: *');

  $arr = array(
    'src' => 'images/tmp/uploaded-1.jpg'
  );

  echo json_encode($arr);
  // echo 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
?>
