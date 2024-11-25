<!DOCTYPE html>
<html>
    <meta name="nerd" content="what you looking at..."/>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 

<?php
include $_SERVER['DOCUMENT_ROOT']."/components/navbar.php";
include $_SERVER['DOCUMENT_ROOT']."/components/font.php";

$content_dir = scandir('./content/');

$content_dir = array_diff($content_dir, [".", "..", ".gitignore"]);
$content_dir = array_values($content_dir);

function create_blog_card($directory_name, $img, $dis){
    $blog_card_title = str_replace("_", " ", $directory_name);

    if ($img){
        $img_path = "";
        echo "<div class='BlogCard'> <img href='" . $img_path . "'><h1>" .$blog_card_title . "</h1><h2>" . $dis . "</h2></div>";
    } else {
        echo "<div class='BlogCard'><h1>" . $blog_card_title . "</h1><h2>" . $dis . "</h2></div>";
    }
}

// foreach(content_dir as dir)

?>

    <head>
        <link rel="shortcut icon" type="image/ico" href="../v01d.ico">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <div class="BlogPage">
        <section class="Blog">
            <h1>Blog</h1>
            <br />
            <div class="BlogGallery">
            <h2>still haven't written any blogs 😐</h2>
            </div>
        </section>
    </div>
</html>
