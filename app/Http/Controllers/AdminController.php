<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminTableRequest;
use App\Http\Requests\trainersTableRequest;
use App\Http\Requests\usersTableRequest;
use App\Http\Resources\AdminResource;
use App\Http\Resources\TrainerResource;
use App\Http\Resources\UserResource;
use App\Models\Admin;
use App\Models\Trainer;
use App\Models\User;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class AdminController extends Controller
{
   public function index(): \Inertia\Response
   {
        return Inertia::render('Admin/AdminDashboard');
   }

   public function table(AdminTableRequest $request): \Inertia\Response
   {
       $users = QueryBuilder::for(Admin::class)
           ->allowedSorts([
               'first_name',
               'last_name',
               'email',
           ])
           ->allowedFilters([
               'id',
               'email',
//               AllowedFilter::scope('created_from'),
//               AllowedFilter::scope('created_till'),
           ])
           ->paginate(10)
           ->withQueryString();

       return Inertia::render('Admin/AdminTable' , [
           'users' => AdminResource::collection($users),
           'filter' => $request->get('filter'),
           'sort' => $request->get('sort'),
       ]);
   }

   public function usersTable(usersTableRequest $request): \Inertia\Response
   {
       $users = QueryBuilder::for(User::class)
           ->allowedSorts([
               'first_name',
               'last_name',
               'email',
               'trainer_id',
           ])
           ->allowedFilters([
               'id',
               'email',
//               AllowedFilter::scope('created_from'),
//               AllowedFilter::scope('created_till'),
           ])
           ->paginate(10)
           ->withQueryString();

       return Inertia::render('Admin/AdminTable' , [
           'users' => UserResource::collection($users),
           'filter' => $request->get('filter'),
           'sort' => $request->get('sort'),
       ]);
   }

    public function trainersTable(trainersTableRequest $request): \Inertia\Response
    {
        $users = QueryBuilder::for(Trainer::class)
            ->allowedSorts([
                'first_name',
                'last_name',
                'email',
            ])
            ->allowedFilters([
                'id',
                'email',
//               AllowedFilter::scope('created_from'),
//               AllowedFilter::scope('created_till'),
            ])
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/AdminTable' , [
            'users' => TrainerResource::collection($users),
            'filter' => $request->get('filter'),
            'sort' => $request->get('sort'),
        ]);
    }
}
