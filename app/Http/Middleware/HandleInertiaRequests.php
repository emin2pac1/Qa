<?php

namespace App\Http\Middleware;

use App\Helpers\MenuHelper;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Laravel\Fortify\Features;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [

            'karajkom' => function () use ($request) {
                return [
                    'canManageTwoFactorAuthentication' => Features::canManageTwoFactorAuthentication(),
                    'canUpdatePassword' => Features::enabled(Features::updatePasswords()),
                    'canUpdateProfileInformation' => Features::canUpdateProfileInformation(),
                    'flash' => $request->session()->get('flash', []),
                    'managesProfilePhotos' => config('karajkom.manages_profile_photos'),
                ];
            },
            'dashboard_menu' => MenuHelper::getMenu(),
            'user' => function () use ($request) {
                if (!$request->user()) {
                    return null;
                }

                return array_merge($request->user()->toArray(), array_filter([
                ]), [
                    'two_factor_enabled' => !is_null($request->user()->two_factor_secret),
                    'profile_photo_url' => $request->user()->profile_photo_url,
                    'role' => $request->user()->getRoleNames()->first(),
                    'department' => $request->user()->department ? $request->user()->department->name : null,
                ]);
            },
        ]);
    }
}
