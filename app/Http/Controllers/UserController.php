<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function registerPage() {
        return view('register');
    }

    public function registerUser(Request $request) {
        $incomingData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);
        //return view('register');
        return 'User registered successfully!';
    }
}
