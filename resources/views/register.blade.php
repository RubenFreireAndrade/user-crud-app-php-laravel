<?php
    //session_start();
    //include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <form action="/register" method="POST">
        @csrf
        <input type="text" name="name" placeholder="Type Your Name">
        <input type="email" name="email" placeholder="Type Your Email">
        <input type="password" name="password" placeholder="Type Your Password">
        <button>CREATE</button>
    </form>
</body>
</html>

<?php
    // if (isset($_POST["register"])) {
    //     $username = trim(filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS));
    //     $password = trim(filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS));
    //     $email = trim(filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL));

    //     if (!empty($username) || !empty($password) || !empty($email)) {
    //         $_SESSION["username"] = $username;
    //         $_SESSION["password"] = $password;
    //         $_SESSION["email"] = $email;
            
    //         echo "Username: {$_SESSION["username"]} <br> Password: {$_SESSION["password"]} <br> Email: {$_SESSION["email"]}";
            
    //         // This will redirect the user to index.php
    //         //header("location: index.php");
    //     } else {
    //         echo "Please fill all the fields";
    //     }
    // }
?>

<?php
    //include("footer.html");
?>

{{-- <script>
    function stopSubmit() {
        event.preventDefault();
    };
</script> --}}