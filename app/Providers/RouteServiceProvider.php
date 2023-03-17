<?php

namespace App\Providers;

use App\Enums\UserRole;
use App\Models\Issue;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        Route::bind('dev_issue', function ($value) {
            return Issue::where('id', $value)->inCurrentDepartment()->firstOrFail();
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));

            Route::middleware('web', 'auth', 'verified', 'role:' . UserRole::QaAdmin, )
                ->prefix('admin')
                ->as('admin:')
                ->group(base_path('routes/admin.php'));

            Route::middleware('web', 'auth', 'verified', 'role:' . UserRole::Developer, )
                ->prefix('dev')
                ->as('dev:')
                ->group(base_path('routes/dev.php'));

            Route::middleware('web', 'auth', 'verified', )
                ->prefix('user')
                ->as('user:')
                ->group(base_path('routes/auth.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
