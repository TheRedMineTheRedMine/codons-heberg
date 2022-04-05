<?php

# header
header('Content-type: application/json');
error_reporting(0);

$validExtensions = array (
    // images
    'xbm', 'tif', 'pjp', 'svgz', 'jpg', 'jpeg', 'ico', 'tiff', 'gif',
    'svg', 'jfif', 'webp', 'png', 'bmp', 'pjpeg', 'avif',
    // videos
    'mp4', 'hls', 'm3u8', 'webm',
    // web pages
    'html', 'htm', 'xhtml', 'xml', 'php',
    // scripts and styles
    'js', 'jsx', 'json', 'css', 'scss',
    // fonts
    'ttf', 'woff', 'woff2',
    // some others
    'txt', 'docx', 'odt', 'pptx',
    'md', 'LICENSE', 'VERSION',
);
$result = [];

foreach ($_FILES as $key => $file) {
    if ($file['size'] <= 209715200) {
        $extUpload = strtolower(substr(strrchr($file['name'], '.'), 1));

        if (in_array($extUpload, $validExtensions)) {
            try {
                if (isset($_POST['appName']) && !empty($_POST['appName'])) {
                    $path = '../../' . urlencode($_POST['appName']);
                    
                    if (!is_dir($path)) mkdir($path);
                }
            } catch (ErrorException $e) {
                echo json_encode('An error as occured :' . $e);
                exit;
            }

            $filePath = $path.'/'.$file['name'];
            
            if (move_uploaded_file($file['tmp_name'], $filePath)) {
                array_push($result, $filePath);
            } else {
                echo json_encode('An error has occured when uploading file.');
                exit;
            };
        } else array_push($result, 'Votre fichier comporte une extension invalide !');
    } else array_push($result, 'File too large.');
}

echo json_encode(sizeof($result) === 0  ? 'Cannot import files.' : $result);
exit;
