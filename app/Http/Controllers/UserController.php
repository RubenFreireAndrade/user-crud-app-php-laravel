<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function registerPage() {
        return view('/register');
    }

    public function registerUser(Request $request) {
        $incomingData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        $incomingData['password'] = bcrypt($incomingData['password']);
        User::create($incomingData);

        //return view('register');
        return 'User registered successfully!';
    }

    public function loginPage() {
        return view('/login');
    }
}
