<?php
$dir = "C:\Abhinav\Movies";
$a = scan_Dir($dir);
$i=1;
foreach ($a as $key) {
    echo $i.' '.$key."<br>";
    $i++;
}
function scan_Dir($dir) {
    $arrfiles = array();
    if (is_dir($dir)) {
        if ($handle = opendir($dir)) {
            chdir($dir);
            while (false !== ($file = readdir($handle))) { 
                if ($file != "." && $file != "..") { 
                    if (is_dir($file)) { 
                        $arr = scan_Dir($file);
                        foreach ($arr as $value) {
                             
                                $arrfiles[] = $value;
                        }
                    } else {
                        $arrfiles[] =$file;
                    }
                }
            }
            chdir("../");
        }
        closedir($handle);
    }
    return $arrfiles;
}
?>