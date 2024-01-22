<?php
/**
 * Write a PHP function called averageGrade that receives an associative array 
 * representing a student's information (similar to the $student array from the 
 * previous question) as a parameter. Calculate and return the average grade of 
 * the student. Test this function using the $student array you created earlier.
 */
// Function to calculate the average grade of a student
function averageGrade($studentInfo) {
    $grades = $studentInfo["grades"];
    $totalGrades = count($grades);
    $sum = array_sum($grades);

    if ($totalGrades > 0) {
        $average = $sum / $totalGrades;
        return $average;
    } else {
        return "No grades available.";
    }
}

// Test the function with the $student array created earlier
$student = array(
    "name" => "John",
    "age" => 25,
    "grades" => array(85, 90, 78, 92)
);

$studentAverage = averageGrade($student);

// Output the result
if (is_numeric($studentAverage)) {
    echo "The average grade for student " . $student["name"] . " is: " . $studentAverage;
} else {
    echo $studentAverage;
}
?>