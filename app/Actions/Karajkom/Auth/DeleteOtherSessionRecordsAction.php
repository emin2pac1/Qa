<?php

namespace App\Actions\Karajkom\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeleteOtherSessionRecordsAction
{
    public function deleteOtherSessionRecords(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
            ->where('user_id', $request->user()->getAuthIdentifier())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
    }
}
