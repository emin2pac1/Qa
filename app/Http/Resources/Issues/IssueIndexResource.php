<?php

namespace App\Http\Resources\Issues;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class IssueIndexResource extends JsonResource
{
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'title' => $this->title,
            'department' => $this->department,
            'priority' => $this->priority,
            'status' => $this->status,
            'milestone' => $this->milestone,
//            time_left calculated by days before milestone
            'time_left' =>$this->getTimeLeftFormatted($this->milestone),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    private function getTimeLeftFormatted($milestone){

        if($milestone==null) return null;
        $isAfter= Carbon::make($this->milestone)->isAfter(Carbon::now());// the fuck  is this error lol idk
            $diffDays=Carbon::make($this->milestone)->diffInDays() ;

        if($isAfter){
            return $diffDays.' days left';
        }

        return $diffDays ==0? 'today': $diffDays.' days ago';


    }
}
