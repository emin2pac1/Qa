<?php

namespace App\Helpers;

use App\Enums\UserRole;
use App\Menu\AdminMenu;
use App\Menu\DeveloperMenu;
use App\Menu\GuestMenu;
use Illuminate\Support\Facades\Gate;

class MenuHelper
{
    /** returns dashboard menu according to user role
     * @return array
     */
    public static function getMenu(): array
    {
        if (Gate::allows(UserRole::QaAdmin)) {
            return AdminMenu::get_menu();
        } elseif (Gate::allows(UserRole::Developer)) {
            return DeveloperMenu::get_menu();
        }
        return GuestMenu::get_menu();
    }
}
