<?php

use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::name('trainer.')->prefix('/trainer')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('TrainerDashboard');
    })->middleware(['auth:trainer'])->name('dashboard');
});

Route::name('admin.')->prefix('/admin')->group(function () {

    Route::get('/dashboard', [AdminController::class, 'index'])->middleware(['auth:admin'])->name('dashboard');
    Route::get('/admins/table', [AdminController::class, 'table'])->middleware(['auth:admin'])->name('admin.table');
    Route::get('/users/table', [AdminController::class, 'table'])->middleware(['auth:admin'])->name('users.table');
    Route::get('/trainers/table', [AdminController::class, 'table'])->middleware(['auth:admin'])->name('trainers.table');

});


require __DIR__.'/auth.php';
