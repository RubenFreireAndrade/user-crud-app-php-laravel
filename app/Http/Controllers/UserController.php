<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Database\QueryException;

class UserController extends Controller
{
    public function registerPage() {
        return view('/register');
    }

    public function register(Request $request) {
        $incomingData = $request->validate([
            'name' => ['required', Rule::unique('users', 'name')],
            'email' => ['required', Rule::unique('users', 'email')],
            'password' => 'required'
        ]);
        
        $incomingData['password'] = bcrypt($incomingData['password']);
        
        try {
            $newUser = User::create($incomingData);
            auth()->login($newUser);
            
            header('refresh: 2; url=/');
            return 'Successfully registered user!';
        } catch (QueryException $e) {
            $e->getMessage();
        }
    }

    public function loginPage() {
        return view('/login');
    }

    public function logout() {
        auth()->logout();
        return redirect('/');
    }

    public function login(Request $request) {
        $incomingData = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (auth()->attempt($incomingData)) {
            $request->session()->regenerate();

            header('refresh: 2; url=/dashboard');
            return 'Successfully logged in!';
            //redirect('/dashboard');
        }

        return redirect('/');
    }

    public function dashboard() {
        return view('/dashboard');
    }
}
