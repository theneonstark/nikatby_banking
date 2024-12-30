<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function select($section = null){
        return Inertia::render('Report',['section' => $section]);
    }
}
