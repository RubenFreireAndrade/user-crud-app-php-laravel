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
}
