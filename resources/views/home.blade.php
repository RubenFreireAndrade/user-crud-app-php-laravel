<?php
    //session_start();
    //include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- @vite('resources/css/app.css') --}}
    <title>Home</title>
</head>
<body>
    @csrf
    
    <div class="p-4 flex flex-row justify-evenly border-solid border border-black bg-blue-300">
        <div class="font-bold underline border-solid border border-black">Welcome to our website</div>
        <div>
            <a href="/register" class="p-2 border-solid border border-black hover:bg-green-300">Create Account</a>
            <a href="/login" class="p-2 border-solid border border-black hover:bg-green-300">Login</a>
        </div>
    </div>

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