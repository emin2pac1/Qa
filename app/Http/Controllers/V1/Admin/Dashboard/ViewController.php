<?php

namespace App\Http\Controllers\V1\Admin\Dashboard;

use App\Enums\IssueStatus;
use App\Http\Controllers\Controller;
use App\Models\Issue;
use Inertia\Inertia;

class ViewController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Inertia\Response
     */
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('Admin/Dashboard/Index', [
            'completed_issues' => Issue::query()->inStatus(IssueStatus::Completed)->count(),
            'pending_issues' => Issue::query()->inStatus(IssueStatus::Pending)->count(),
            'pie_chart_data' => Issue::select('status')->get()->groupBy('status')->map(function ($item, $key) {
                return [
                    'status' => $item[0]->status,
                    'count' => $item->count()
                ];
            })->toArray(),
        ]);
    }
}
