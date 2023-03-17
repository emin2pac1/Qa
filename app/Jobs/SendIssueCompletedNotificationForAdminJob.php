<?php

namespace App\Jobs;

use App\Enums\UserRole;
use App\Models\Issue;
use App\Models\User;
use App\Notifications\SendIssueCompletedAdminNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendIssueCompletedNotificationForAdminJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Issue $issue;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Issue $issue)
    {
        //
        $this->issue = $issue;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $users = User::role(UserRole::QaAdmin)->get();
        foreach ($users as $user) {
            $user->notify(new SendIssueCompletedAdminNotification($this->issue));
        }
    }
}
