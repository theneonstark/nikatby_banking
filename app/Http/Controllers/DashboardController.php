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
}
