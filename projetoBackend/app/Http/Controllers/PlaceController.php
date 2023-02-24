<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use App\Http\Resources\PlaceResource;
use Illuminate\Http\Request;
use App\Models\Place;
use Illuminate\Http\Response;
use App\Types\BaseResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;


class PlaceController extends Controller
{
    public function create(Request $request){

        try {
            $insert['nomeLocal'] = $request['nomeLocal'];
            $insert['numSala'] = $request['numSala'];

            Place::create($request);

           $response['message'] = "Dados salvos com sucesso!";
           $response['sucess'] = true;

        } catch (\Exception $e) {
             $response['message'] = $e->getMessage("Não foi possível salvar os dados!");
            $response['success'] = false;
        }
    }

    public function index(Request $request)
    {
        return PlaceResource::collection(Place::all()); 
    }

    public function paginate(Request $request){
        return  PlaceResource::collection(Place::paginate(10));
     }
}
