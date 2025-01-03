<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display the registration form.
     */
    public function create()
    {
        return Inertia::render('Auth/signup');
    }

    /**
     * Handle the registration request.
     */
    public function register(Request $request)
    {
        // Validate the incoming data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8', // Ensure password confirmation is included
        ]);

        // Create the user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Log the user in automatically
        // Auth::login($user);

        // Redirect to the login page after successful registration
        return redirect()->route('login')->with('success', 'Account created successfully! Please login.');
    }

    /**
     * Show the user dashboard.
     */
    public function index()
    {
        return Inertia::render('/dashboard/Payin', [
            'user' => User::all(),
        ]);
    }
}
