<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class IssueStatus extends Enum
{
//    you can add more statuses here ok? cool
    public const Pending = 'PENDING';
    public const InProgress = 'IN_PROGRESS';
    public const Cancelled = 'CANCELLED';
    public const Rejected = 'REJECTED';
    public const Completed = 'COMPLETED';
}
