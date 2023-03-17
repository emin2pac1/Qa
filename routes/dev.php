<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\V1\Developer\Dashboard\ViewController::class)->name('dashboard');
Route::prefix('issues')->group(function () {
    Route::get('/', \App\Http\Controllers\V1\Developer\Issues\ViewController::class)->name('issues');
    Route::get('/edit/{issue}', \App\Http\Controllers\V1\Developer\Issues\EditController::class)->name('issues.edit');
    Route::post('/update/{dev_issue}', \App\Http\Controllers\V1\Developer\Issues\UpdateController::class)->name('issues.update');
    Route::get('preview/{issue}/{attachment}', \App\Http\Controllers\V1\Developer\Issues\PreviewController::class)->name('issues.preview');
    Route::get('download/{issue}/{attachment}', \App\Http\Controllers\V1\Developer\Issues\DownloadController::class)->name('issues.download');
});
