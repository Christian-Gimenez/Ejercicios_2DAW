<?php
/**
 * a. Write a PHP loop (using for or while) that prints the first 10 even numbers 
 * starting from 2, each number separated by a comma. E.g., 2, 4, 6, ...
 */
// Using a for loop to print the first 10 even numbers starting from 2
$count = 0;

for ($i = 2; $count < 10; $i += 2) {
    echo $i;
    $count++;

    if ($count < 10) {
        echo ", "; // Add a comma and space if it's not the last number
    }
}
?>