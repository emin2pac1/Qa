<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class RedirectUserToDashboard
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->hasRole(UserRole::QaAdmin)) {
            return Redirect::route('admin:dashboard');
        }
        if (auth()->user()->hasRole(UserRole::Developer)) {
            return Redirect::route('dev:dashboard');
        }


        return Redirect::route('welcome');
    }
}
