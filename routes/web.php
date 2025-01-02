<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/', fn() => inertia('Auth/signup'));
Route::post('/', [UserController::class, 'register'])->name('register');
Route::get('/Dashboard/{section?}', [DashboardController::class, 'show'])->name('dashboard');
Route::get('/pay/{section?}', [DashboardController::class, 'handle'])->name('payout');
Route::get('/reports/{section?}',[DashboardController::class, 'select'])->name('report');
// Route::get('/cerdentials', [DashboardController::class, 'cerdentials'])->name('cerdentials');
Route::get('/Support', [DashboardController::class, 'support'])->name('Support');
Route::get('/Credentials', [DashboardController::class, 'Credentials'])->name('credentials');
