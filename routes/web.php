<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ModalController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\UserController;
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

Route::middleware(['auth'])->group(function (){

    Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
    Route::post('/selectGym', [UserController::class, 'selectGym'])->name('select_gym');
    Route::get('/selectTrainer/{id}', [UserController::class, 'selectTrainer'])->name('select_trainer');
    Route::post('/selectTrainer', [UserController::class, 'setTrainer'])->name('set_trainer');

});

Route::name('trainer.')->prefix('/trainer')->middleware(['auth:trainer'])->group(function () {
    Route::get('/dashboard', [TrainerController::class, 'index'])->name('dashboard');
    Route::get('/{user}/trainingPlan', [TrainerController::class, 'viewTrainingPlan'])->name('view.trainingPlan');
    Route::post('/trainingPlan/add', [TrainerController::class, 'createTrainingPlan'])->name('create.trainingPlan');
    Route::post('/trainingPlan/edit', [TrainerController::class, 'editTrainingPlan'])->name('edit.trainingPlan');
});

Route::name('admin.')->prefix('/admin')->middleware(['auth:admin'])->group(function () {

    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/admins/table', [AdminController::class, 'table'])->name('admin.table');
    Route::get('/users/table', [AdminController::class, 'usersTable'])->name('users.table');
    Route::get('/trainers/table', [AdminController::class, 'trainersTable'])->name('trainers.table');

});

require __DIR__.'/auth.php';
