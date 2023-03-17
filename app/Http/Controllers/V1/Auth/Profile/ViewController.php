<?php

namespace App\Http\Controllers\V1\Auth\Profile;

use App\Actions\Karajkom\Auth\GetSessionsAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    /*
     * @return \Inertia\Response
     */
    public function __invoke(Request $request, GetSessionsAction $action): \Inertia\Response
    {
        return Inertia::render('Profile/Show', [
            'sessions' => $action->sessions($request)->all(),
        ]);
    }
}
