Thank you for the purchase!

<?php
// This code creates three new variables-$tire_quantity, $oil_quantity, $spark_quantity- and set them
// to contain the data sent via the POST method from the form.
$tire_quantity = $_POST["tireqty"];
$oil_quantity = $_POST["oilqty"];
$spark_quantity = $_POST["sparkqty"];

echo "<p>Order processed at </p>".date("Y-m-d H:i:s");

echo "<p>Your order is as follows: </p>";
echo $tire_quantity." tires.<br/>";

?>

