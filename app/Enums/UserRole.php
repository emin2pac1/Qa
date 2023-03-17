<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class UserRole extends Enum
{
    public const QaAdmin = 'QA';
    public const Developer = 'DEVELOPER';
}
