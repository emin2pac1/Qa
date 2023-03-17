<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
})->name('welcome');
Route::get('/test', function () {
//    dispatch(new \App\Jobs\SendIssueCreatedDailyReport());
});

Route::get('/help', function () {
    return redirect('/docs');
})->name('help');

Route::middleware(['auth', 'verified', 'dashboard-redirect'])->get('/dashboard', function () {
})->name('dashboard');
