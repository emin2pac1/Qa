<?php

namespace App\Http\Controllers\V1\Auth\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfilePhotoController extends Controller
{
    public function destroy(Request $request)
    {
        $request->user()->deleteProfilePhoto();

        return back(303)->with('status', 'profile-photo-deleted');
    }
}
