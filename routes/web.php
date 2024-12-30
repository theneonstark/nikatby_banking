<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => inertia('Auth/login'));
Route::get('/Dashboard/{section?}', [DashboardController::class, 'show'])->name('dashboard');
Route::get('/pay/{section?}', [PaymentController::class, 'handle'])->name('payout');