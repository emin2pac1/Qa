<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        if ($role == UserRole::QaAdmin && !auth()->user()->hasRole(UserRole::QaAdmin)) {
            abort(403);
        }

        if ($role == UserRole::Developer && !auth()->user()->hasRole(UserRole::Developer)) {
            abort(403);
        }


        if ($request->user()->getRoleNames()->count() == 0) {
            abort(403);
        }
        return $next($request);
    }
}
