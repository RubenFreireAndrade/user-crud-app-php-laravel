import { Link, Head } from '@inertiajs/react';

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <h1>Welcome to Register page</h1>

            <form action="/register" method="POST">
                <input type="text" name="name" placeholder="Type Your Name"/>
                <input type="email" name="email" placeholder="Type Your Email"/>
                <input type="password" name="password" placeholder="Type Your Password"/>
                <button>CREATE</button>
            </form>
        </>
    )
}