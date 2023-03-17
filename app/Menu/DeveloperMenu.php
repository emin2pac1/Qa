<?php

namespace App\Menu;

class DeveloperMenu
{
    public static function get_menu(): array
    {
        return array_merge(
            self::dashboard(),
            self::issues(),
           // self::help(),
        );
    }

    private static function dashboard(): array
    {
        return [(object)[
            'title' => 'Dashboard',
            'href' => 'dev:dashboard',
            'parent' => 'dev:dashboard',
            'icon' => 'mdi-view-dashboard'
        ],
        ];
    }
    private static function issues(): array
    {
        return [(object)[
            'title' => 'Issues',
            'href' => 'dev:issues',
            'parent' => 'dev:issues',
            'icon' => 'fa-bug'
        ],
        ];
    }

    private static function help(): array
    {
        return [(object)[
            'title' => 'Help',
            'href' => 'help',
            'parent' => 'help',
            'icon' => 'mdi-help-circle'
        ],
        ];
    }
}
