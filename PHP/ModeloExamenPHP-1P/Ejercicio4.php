<?php
/**
 * Create a PHP associative array called $student with the following key-value pairs:
 * name with a value of "John"
 * age with a value of 25
 * grades with an array of integers: 85, 90, 78, 92
 */
// Create an associative array called $student
$student = array(
    "name" => "John",
    "age" => 25,
    "grades" => array(85, 90, 78, 92)
);

// Access and display elements of the $student array
echo "Student Name: " . $student["name"] . "<br>";
echo "Age: " . $student["age"] . "<br>";
echo "Grades: ";
foreach ($student["grades"] as $grade) {
    echo $grade . " ";
}
?>