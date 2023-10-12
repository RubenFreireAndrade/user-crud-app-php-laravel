import { Link, Head } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <h1>Welcome to Login page</h1>

            <form action='/login' method='POST'>
                <input type="email" name="email" placeholder="Type Your Email" />
                <input type="password" name="password" placeholder="Type Your Password" />
                <button>LOGIN</button>
            </form>
        </>
    );
}