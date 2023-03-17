<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasProfilePhoto
{
    public function updateProfilePhoto(UploadedFile $photo): void
    {
        if (!config('karajkom.manages_profile_photos')) {
            return;
        }
        tap($this->profile_photo_path, function ($previous) use ($photo) {
            $this->forceFill([
                'profile_photo_path' => $photo->storePublicly(
                    'profile-photos',
                    ['disk' => $this->profilePhotoDisk()]
                ),
            ])->save();

            if ($previous) {
                Storage::disk($this->profilePhotoDisk())->delete($previous);
            }
        });
    }

    public function deleteProfilePhoto(): void
    {
        if (!config('karajkom.manages_profile_photos')) {
            return;
        }

        Storage::disk($this->profilePhotoDisk())->delete($this->profile_photo_path);

        $this->forceFill([
            'profile_photo_path' => null,
        ])->save();
    }

    protected function profilePhotoDisk()
    {
        return config('karajkom.profile_photo_disk', 'public');
    }

    public function getProfilePhotoUrlAttribute(): string
    {
        if (!config('karajkom.manages_profile_photos')) {
            return $this->defaultProfilePhotoUrl();
        }


        return $this->profile_photo_path && Storage::disk($this->profilePhotoDisk())->exists($this->profile_photo_path)
            ? Storage::disk($this->profilePhotoDisk())->url($this->profile_photo_path)
            : $this->defaultProfilePhotoUrl();
    }

    protected function defaultProfilePhotoUrl(): string
    {
        return 'https://ui-avatars.com/api/?name=' . urlencode($this->name) . '&color=7F9CF5&background=EBF4FF';
    }
}
