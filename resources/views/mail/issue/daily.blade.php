@component('mail::message')
# Issue Created Daily Report

@component('mail::table')
| Title       | Department         | Priority       |
| :---------- | :----------------- | :------------- | :------------- |
@foreach ($issues as $issue)
| {{$issue->title}} | {{$issue->department->name}} | {{$issue->priority}} |
@endforeach
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
