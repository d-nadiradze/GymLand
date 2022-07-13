<?php

namespace App\Http\Controllers;

use App\Models\TrainingPlan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TrainerController extends Controller
{
    public function index()
    {
        $users = User::where('trainer_id',Auth::id())->get();
        
        return Inertia::render('Trainer/TrainerDashboard',['users' => $users]);
    }

    public function viewTrainingPlan(Request $request, $id)
    {
        $user = User::find($id);
        $trainingPlan = TrainingPlan::whereDate('created_at',Carbon::today())->first();

        if ($trainingPlan){
            return Inertia::render('Trainer/TrainingPlan',['user' => $user, 'trainingPlan' => $trainingPlan]);
        }

        return Inertia::render('Trainer/TrainingPlan',['user' => $user]);
    }

    public function createTrainingPlan(Request $request)
    {
        $trainingPlan = new TrainingPlan();
        $trainingPlan->name = $request->name;
        $trainingPlan->day = $request->day;
        $trainingPlan->breakfast = $request->breakfast;
        $trainingPlan->lunch = $request->lunch;
        $trainingPlan->dinner = $request->dinner;
        $trainingPlan->supper = $request->supper;
        $trainingPlan->training = $request->training;
        $trainingPlan->user_id = $request->user;
        $trainingPlan->trainer_id = $request->trainer;

        $trainingPlan->save();

        return redirect()->route('trainer.dashboard');

    }

    public function editTrainingPlan(Request $request)
    {
        $trainingPlan = TrainingPlan::find($request->planId);
        $trainingPlan->update([
            'name' => $request->name,
            'day' => $request->day,
            'breakfast' => $request->breakfast,
            'lunch' => $request->lunch,
            'dinner' => $request->dinner,
            'supper' => $request->supper,
            'training' => $request->training,
        ]);


        return redirect()->route('trainer.dashboard');

    }
}
