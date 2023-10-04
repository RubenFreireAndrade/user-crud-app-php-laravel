<?php
    //session_start();
    //include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    @csrf
    <h1>Welcome to Login page</h1>
    <form action="/login" method="POST">
        @csrf
        <input type="email" name="email" placeholder="Type Your Email">
        <input type="password" name="password" placeholder="Type Your Password">
        <button>LOGIN</button>
    </form>
</body>
</html>

<?php
    //include("footer.html");
?>