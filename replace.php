<?php
$regex_filepath = glob("*.htm");//read all files in current directory
print_r($regex_filepath);//test result for debug
/*name pattern: 
$file_array = preg_grep("/^([a-z]{2,3}[0-9]{2}_[0-9]{4})(.*).htm$/i", $regex_filepath);
select all files with name in the pattern ab(c)12_3456xxxx.htm
*/
$search = array ("old-style.css", "old-header.php", "old-footer.php");
$replace = array ("new-style.css", "new-header.php", "new-footer.php");
// go through all selected files, and perform a search and replace for multiple strings(css/header.php/footer.php) using array
foreach ($regex_filepath as $filename) {
    $file = file_get_contents($filename);
	foreach ( $replace as $r ){ // need a needle to perform strpos with array
		if(strpos($file,$r)){
	    		file_put_contents($filename, str_replace(
    				$search, $replace, $file));
    		}
	}	
}
?>
