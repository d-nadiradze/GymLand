<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Admin;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Display the Admin login view.
     *
     * @return \Inertia\Response
     */
    public function createAdmin()
    {
        return Inertia::render('Auth/Admin/Login');
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        if ($request->trainer) {

            $guard = 'trainer';
            $redirectUrl = RouteServiceProvider::TRAINER_HOME;

        } else {

            $guard = 'web';
            $redirectUrl = RouteServiceProvider::HOME;
        }

        $request->authenticate($guard);

        $request->session()->regenerate();

        return redirect()->intended($redirectUrl);
    }

    /**
     * Handle an incoming authentication request for admin.
     *
     * @param \App\Http\Requests\Auth\LoginRequest $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    public function storeAdmin(LoginRequest $request)
    {
        $user = Admin::where('email', $request->email)->first();

        if ($user && Hash::check($request['password'],$user->password)){
            Auth::guard('admin')->login($user);

        } else {
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::ADMIN);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function adminLogout()
    {
        if(Auth::guard('admin')->check())
        {
            Auth::guard('admin')->logout();
        }
        return redirect()->route('admin.login');
    }

    public function trainerLogout()
    {
        if(Auth::guard('trainer')->check())
        {
            Auth::guard('trainer')->logout();
        }
        return redirect('/');
    }
}
