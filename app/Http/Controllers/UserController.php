<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('/Dashboard',[
            'user' => User::all(),
        ]);
    }

    public function store(Request $request){
        User::create($request->validate([
            'email' => ['required','max:50'],
            'password' => ['required','max:255'],
        ]));

        return to_route('/Dashboard');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('dashboard', ['section' => 'Payin'])->with('success', 'Account created successfully!');

    }
}
