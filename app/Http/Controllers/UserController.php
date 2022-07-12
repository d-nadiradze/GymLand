<?php

namespace App\Http\Controllers;

use App\Models\Gym;
use App\Models\Trainer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(): \Inertia\Response
    {

        $trainers = Trainer::all(['id','first_name', 'last_name', 'email', 'gym_id', 'profession_info', 'image']);
        $gyms = Gym::all(['name','location','image','id']);

        return Inertia::render('Dashboard', ['trainers' => $trainers, 'gyms' => $gyms]);
    }

    public function selectGym(Request $request): \Illuminate\Http\RedirectResponse
    {
        $user = User::find(Auth::id());

        $user->update([
            'gym_id' => $request->data[1]['id'],
            'selected_days' => $request->data[0]
        ]);

        return redirect()->route('dashboard');
    }

    public function selectTrainer($gymId): \Inertia\Response|\Illuminate\Http\RedirectResponse
    {
        $user = Auth::user();
        $trainers = Trainer::where('gym_id',$gymId)->get(['id','first_name', 'last_name', 'email', 'gym_id', 'profession_info', 'image']);

        if ( $user->gym_id != $gymId ){
            return back()->withErrors([
               'message' => 'Incorrect Gym'
            ]);
        }

        return Inertia::render('User/SelectTrainer', ['trainers' => $trainers]);
    }

    public function setTrainer(Request $request)
    {
        if ( Auth::user()->gym_id === null ){
            return back()->withErrors([
                'message' => 'Please before choose trainer select gym',
            ]);
        } else {
            User::find(Auth::id())->update([
                'trainer_id' => $request->trainer
            ]);
        }

        return Redirect::route('dashboard');

    }


}
