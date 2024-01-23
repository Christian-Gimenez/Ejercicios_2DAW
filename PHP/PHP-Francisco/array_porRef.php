<?php
//

function precio_con_iva_val($precio, $iva = 0.18) {
  $precio *= (1 + $iva);
}

function precio_con_iva_ref(&$precio, $iva = 0.18) {
  $precio *= (1 + $iva);
}

$precio = 10;
echo "precio original: $precio<br/>";
precio_con_iva_val($precio);
echo "precio_con_iva_val -> $precio<br/>";
precio_con_iva_ref($precio);
echo "precio_con_iva_ref -> $precio<br/>";

echo "precio original: $precio<br/>";
precio_con_iva_val($precio, 0.2);
echo "precio_con_iva_val: $precio<br/>";
precio_con_iva_ref($precio, 0.2);
echo "precio_con_iva_ref: $precio<br/>";