<?php

namespace App\Helpers;

class PriorityIconHelper
{

    public static function get()
    {
        return (object)[
            'critical' => (object)[
                'icon' => 'report',
                'color' => 'red',
            ],
            'high' => (object)[
                'icon' => 'security',
                'color' => 'orange',
            ],
            'moderate' => (object)[
                'icon' => 'shield',
                'color' => 'purple',
            ],
            'low' => (object)[
                'icon' => 'warning',
                'color' => 'blue',
            ],
        ];
    }
}
