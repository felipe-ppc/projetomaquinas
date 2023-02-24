<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Machine;
use Illuminate\Http\Response;
use App\Types\BaseResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\MachineResource;


class MachineController extends Controller
{
    public function create(Request $request){

        try {
            $insert['numeropatrimonio'] = $request['numeropatrimonio'];
            $insert['modelomaquina'] = $request['modelomaquina'];
            $insert['memoriaram'] = $request['memoriaram'];
            $insert['hdmaquina'] = $request['hdmaquina'];
            $insert['sistemaoperacional'] = $request['sistemaoperacional'];
            $insert['softwarearcgis'] = $request['softwarearcgis'];
            $insert['statusmaquina'] = $request['statusmaquina'];
            $insert['maquinaoperacional'] = $request['maquinaoperacional'];
            $insert['dataaquisicao'] = $request['dataaquisicao'];

            Machine::insert($insert);

            $response['message'] = "Dados salvo com sucesso!";
            $response['sucess'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage("Não foi possível salvar os dados!");
            $response['success'] = false;
        }
        return $response;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MachineResource::collection(Machine::all()); 
    }

    public function paginate(){
        return  MachineResource::collection(Machine::paginate(10));
     }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
