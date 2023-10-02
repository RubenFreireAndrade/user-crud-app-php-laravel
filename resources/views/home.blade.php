<?php
    //session_start();
    //include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>Document</title>
</head>
<body>
    @csrf
    <h1>Welcome to our website</h1>
    <a href="/register">Create Account</a>
    <a href="/login">Login</a>

    {{-- <form action="/register" method="POST">
        @csrf
        <input type="text" name="name" placeholder="Type Your Name">
        <input type="email" name="email" placeholder="Type Your Email">
        <input type="password" name="password" placeholder="Type Your Password">
        <button>CREATE</button>
    </form> --}}
    
</body>
</html>

<?php
    //include("footer.html");
?>