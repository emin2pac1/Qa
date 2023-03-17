<?php

namespace App\Http\Controllers\V1\Auth;

use App\Actions\Karajkom\Auth\DeleteOtherSessionRecordsAction;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;

class OtherBrowserSessionsController extends Controller
{
    public function destroy(Request $request, StatefulGuard $guard, DeleteOtherSessionRecordsAction $action)
    {
        $request->validate([
            'password' => 'password',
        ]);

        $guard->logoutOtherDevices($request->password);

        $action->deleteOtherSessionRecords($request);

        return back(303);
    }
}
