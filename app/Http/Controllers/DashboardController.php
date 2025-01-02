<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show($section =null){
        return Inertia::render('Dashboard',[
            'section' =>$section,
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
}
