@component('mail::message')
# {{ $issue->title }}

@component('mail::button', ['url' => $url])
Visit
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
