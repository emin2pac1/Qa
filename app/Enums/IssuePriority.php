<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class IssuePriority extends Enum
{
    public const critical = 'critical';
    public const high = 'high';
    public const moderate = 'moderate';
    public const low = 'low';
}
