<?php

$newArray = array();
if ($handle = opendir('./Videos')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != ".." && $entry != ".DS_Store") {

            $newArray[] =  "Videos/" . $entry;
        }
    }

    closedir($handle);
}



// for ($i = 0; $i < count($newArray); $i++) {
//     // $newArray[$i] = "Videos/" . $newArray[$i];
//     // echo $newArray[$i] . "\n";
// }
