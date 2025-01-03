<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth; // Add this line

class DashboardController extends Controller
{
    public function show($section = null)
    {
        return Inertia::render('Dashboard', [
            'section' => $section,
            'user' => Auth::user(), // Pass the authenticated user's data
        ]);
    }

    public function select($section = null){
        return Inertia::render('Report',['section' => $section]);
    }

    public function handle($section = null)
    {
        return Inertia::render('Payout', ['section' => $section]);
    }
    public function support()
    {
        return Inertia::render('Support');
    }
    public function Credentials()
    {
        return Inertia::render('Credentials');
    }

    public function payin()
    {
        return Inertia::render('Dashboard', [
            'message' => 'Welcome to the Payinm page!',
        ]);
    }
    
}
