<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function handle($section = null)
    {
        return Inertia::render('Payout', ['section' => $section]);
    }
}
