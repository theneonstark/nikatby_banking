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
Route::get('/pay/{section?}', [PaymentController::class, 'handle'])->name('payout');
Route::get('/reports/{section?}',[ReportController::class, 'select'])->name('report');