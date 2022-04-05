<?php

# header
header('Content-type: application/json');
error_reporting(0);

echo json_encode($_FILES);
