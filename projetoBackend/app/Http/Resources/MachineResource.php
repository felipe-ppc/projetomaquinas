<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MachineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "numeropatrimonio"=> $this-> numeropatrimonio ,
            "modelomaquina"=> $this-> modelomaquina,
            "memoriaram"=> $this-> memoriaram,
            "hdmaquina"=> $this-> hdmaquina,
            "sistemaoperacional"=> $this->sistemaoperacional,
            "softwarearcgis"=> $this->softwarearcgis,
            "statusmaquina"=> $this-> statusmaquina,
            "maquinaoperacional"=> $this-> maquinaoperacional,
            "dataaquisicao"=> $this-> dataaquisicao,
        ];
    }
}
