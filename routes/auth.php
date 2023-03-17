<?php

use Illuminate\Support\Facades\Route;

Route::get('/profile', \App\Http\Controllers\V1\Auth\Profile\ViewController::class)
    ->name('profile.show');
Route::delete('/other-browser-sessions', [\App\Http\Controllers\V1\Auth\OtherBrowserSessionsController::class, 'destroy'])
    ->name('other-browser-sessions.destroy');
Route::delete('/profile-photo', [\App\Http\Controllers\V1\Auth\Profile\ProfilePhotoController::class, 'destroy'])
    ->name('current-user-photo.destroy');
