Thank you for your purchase! <br/><br/>

<?php

$tire_quantity = $_POST["tireqty"];
$oil_quantity = $_POST["oilqty"];
$spark_quantity = $_POST["sparkqty"];

echo "order processed at ".date("Y-m-d H:i:s");

echo "Your order is as follows: ";
echo htmlspecialchars($tire_quantity). " tires.";
echo "$oil_quantity bottles of oil.";
echo "$spark_quantity spark plugs.";

?>