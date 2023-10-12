import { Link, Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />

            <div class="p-4 flex flex-row justify-evenly border-solid border border-black bg-blue-300">
                <div class="font-bold underline border-solid border border-black">Welcome to our website</div>
                <div>
                    {auth.user ? (
                        <Link href={route('dashboard')} className='p-2 border-solid border border-black hover:bg-green-300'>
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('register')} className='p-2 border-solid border border-black hover:bg-green-300'>
                                Create Account
                            </Link>

                            <Link href={route('login')} className='p-2 border-solid border border-black hover:bg-green-300'>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}