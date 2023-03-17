<?php

namespace App\Menu;

class GuestMenu
{
    public static function get_menu(): array
    {
        return array_merge(
//            self::help(),
            self::login()
        );
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

    private static function login(): array
    {
        if (auth()->check()) {
            return [];
        }
        return [(object)[
            'title' => 'Login',
            'href' => 'login',
            'parent' => 'login',
            'icon' => 'mdi-login'
        ],
        ];
    }
}
