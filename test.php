<?php

echo '<pre>';

var_dump($GLOBALS, $_SERVER);

echo '</pre>';

?>
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Document</title>
    
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./src/css/style.css">

    <script type="text/javascript" src="./src/js/app.js"></script>

</head>
<body>

    <h1>Cod'ons Heberg</h1>

    <form method="get" enctype="multipart/form-data">
        <input type="file" name="files" id="input-files" webkitdirectory multiple>
        <input type="submit" value="Envoyer">
        <input type="reset" value="Reset">
    </form>
    
</body>
</html>
