<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Actions\Karajkom\Admin\Issue\DuplicateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Issue\DuplicateRequest;
use App\Models\Issue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DuplicateController extends Controller
{

    public function __invoke(DuplicateRequest $request, DuplicateAction $action, Issue $issue)
    {
        try {
            DB::beginTransaction();
            $action->handle($issue, $request->department);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        return redirect()->route('admin:issues');
    }

}
