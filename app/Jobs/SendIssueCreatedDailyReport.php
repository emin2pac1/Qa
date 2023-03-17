<?php

namespace App\Jobs;

use App\Enums\UserRole;
use App\Models\User;
use App\Notifications\AdminIssueCreatedDailySummeryNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendIssueCreatedDailyReport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $users = User::role(UserRole::QaAdmin)->get();
//        today created issues
        $todayCreatedIssues = \App\Models\Issue::query()->whereDate('created_at', today())->get();

        foreach ($users as $user) {
            $user->notify(new AdminIssueCreatedDailySummeryNotification($todayCreatedIssues));
        }
    }
}
