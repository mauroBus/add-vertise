<?php
  // router.php
  if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
      return false;    // serve the requested resource as-is
  } else {
      echo "<p>Thanks for using grunt-php :)</p>" + $_SERVER['SERVER_NAME'];
  }
?>
