<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
   public function index(): \Inertia\Response
   {
        return Inertia::render('Admin/AdminDashboard');
   }

   public function table()
   {
       return Inertia::render('Admin/AdminTable');
   }
}
