<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => inertia('Auth/login'));
Route::get('/Dashboard/{section?}', [DashboardController::class, 'show'])->name('dashboard');