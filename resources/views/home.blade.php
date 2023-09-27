<?php
    session_start();
    //include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    @csrf
    <h1>Welcome to our website</h1>
    <a href="register">Create Account</a>
    <a href="login">Login</a>
</body>
</html>

<?php
    //include("footer.html");
?>