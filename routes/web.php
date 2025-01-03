<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedRegistrationController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

// Display login form for unauthenticated users
Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');

// Authentication routes (login and logout)
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

// Registration routes

// Registration route
Route::get('/signup', [UserController::class, 'create'])->name('signup'); // Show registration form
Route::post('/signup', [UserController::class, 'register']); // Handle registration
// Routes that require authentication
Route::middleware('auth')->group(function () {
    Route::get('dashboard/Payin', [DashboardController::class, 'payin'])->name('dashboard.Payin');
    Route::get('/dashboard/{section?}', [DashboardController::class, 'show'])->name('dashboard/Payin');
    Route::get('/pay/{section?}', [DashboardController::class, 'handle'])->name('payout');
    Route::get('/reports/{section?}', [DashboardController::class, 'select'])->name('report');
    Route::get('/Support', [DashboardController::class, 'support'])->name('support');
    Route::get('/Credentials', [DashboardController::class, 'Credentials'])->name('credentials');
});
  