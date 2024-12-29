<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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
}