<?php

namespace App\Menu;

class AdminMenu
{
    public static function get_menu(): array
    {
        return array_merge(
            self::dashboard(),
            self::issues(),
            //self::help(),
        );
    }


    private static function dashboard(): array
    {
        return [(object)[
            'title' => 'Dashboard',
            'href' => 'admin:dashboard',
            'parent' => 'admin:dashboard',
            'icon' => 'mdi-view-dashboard'
        ],
        ];
    }

    private static function issues(): array
    {
        return [(object)[
            'title' => 'Issues',
            'href' => 'admin:issues',
            'parent' => 'admin:issues',
            'icon' => 'mdi-alert-outline'
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
