<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
</head>
<body>
    <h1>Welcome to Dashboard</h1>
    <form action="/logout" method="POST">
        @csrf
        <button>LOGOUT</button>
    </form>

    <div style="border: 2px solid black;">
        <form action="/create-post" method="POST">
            @csrf
            <input type="text" name="title" placeholder="Title">
            <textarea type="long" name="body" placeholder="Content"></textarea>
            <button>CREATE POST</button>
        </form>
    </div>

    <div style="border: 2px solid black;">
        <h2>All Posts</h2>
        @foreach($posts as $post)
            <div style="background-color: silver; padding: 0.3rem; margin: 0.3rem">
                <h3>{{ $post->title }}</h3>
                <p>{{ $post->body }}</p>
            </div>
        @endforeach
    </div>

</body>
</html>