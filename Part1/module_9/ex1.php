<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order success</title>
</head>
<body>
  <h3>Order success</h3>
  <?php
    $name = $_POST['product'];
    $material = $_POST['material'];
    $amount = $_POST['amount']; 
    echo "Замовлено виріб - $name <br>"; 
    echo "Матеріал - $material <br>";
    echo "Кількість - $amount <br>"; 
  ?>
  <style>
      body{
          text-align: center;
          background-color: bisque;
          font-size: 20px;
      }
  </style>
  <a href="ex1.html">Повернення</a>
  <br>
</body>
</html>