<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\V1\Admin\Dashboard\ViewController::class)->name('dashboard');

Route::prefix('issues')->group(function () {
    Route::get('/', \App\Http\Controllers\V1\Admin\Issues\ViewController::class)->name('issues');
//    Create
    Route::get('create', \App\Http\Controllers\V1\Admin\Issues\CreateController::class)->name('issues.create');
    Route::get('edit/{issue}', \App\Http\Controllers\V1\Admin\Issues\EditController::class)->name('issues.edit');
    Route::delete('destroy/{issue}', \App\Http\Controllers\V1\Admin\Issues\DeleteController::class)->name('issues.destroy');
    Route::post('store', \App\Http\Controllers\V1\Admin\Issues\StoreController::class)->name('issues.store');
    Route::post('duplicate/{issue}', \App\Http\Controllers\V1\Admin\Issues\DuplicateController::class)->name('issues.duplicate');
    Route::post('update/{issue}', \App\Http\Controllers\V1\Admin\Issues\UpdateController::class)->name('issues.update');
    Route::get('preview/{issue}/{attachment}', \App\Http\Controllers\V1\Admin\Issues\PreviewController::class)->name('issues.preview');
    Route::get('download/{issue}/{attachment}', \App\Http\Controllers\V1\Admin\Issues\DownloadController::class)->name('issues.download');
});
