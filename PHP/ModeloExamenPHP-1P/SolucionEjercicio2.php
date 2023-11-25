<?php
/**
 * Create a PHP function called calculateArea that takes two parameters: 
 * $length and $width representing the length and width of a rectangle respectively. 
 * Inside the function, calculate and return the area of the rectangle using 
 * the formula: area = length * width.
 */
// Function to calculate the area of a rectangle
function calculateArea($length, $width) {
    $area = $length * $width; // Calculate the area using the formula: area = length * width
    return $area; // Return the calculated area
}

// Test the function with values 5 for length and 8 for width
$rectangleLength = 5;
$rectangleWidth = 8;
$result = calculateArea($rectangleLength, $rectangleWidth);

// Output the result
echo "The area of the rectangle with length $rectangleLength and width $rectangleWidth is: $result";
?>