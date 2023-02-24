<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Collaborator;
use Illuminate\Http\Response;
use App\Types\BaseResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\CollaboratorsResource;

class CollaboratorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create(Request $request){

        try {
            
            $insert['nome'] = $request['nome'];
            $insert['email'] = $request['email'];
            $insert['telefone'] = $request['telefone'];

            Collaborator::insert($insert);

            $response['message'] = "Dados do colaborador salvo com sucesso!";
            $response['sucess'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage("E-mail já cadastrado!");
            $response['success'] = false;
        }
        return $response;
    }

    public function index(){
       return  CollaboratorsResource::collection(Collaborator::paginate(10));
    }

    public function show(Request $request){
        return  CollaboratorsResource::collection(Collaborator::all());
     }

     public function id(Request $id){
        return  CollaboratorsResource::collection(Collaborator::find($id));
     }

    // public function store(Request $request)
    // {
    //     $input = $request->all();
    //     $validator = Validator::make($input,[
    //         "nome "=> 'required',
    //         "email" => 'required',
    //         "telefone" => 'required'
    //     ]);
    //     if($validator->fails()){

    //         return $this->sendError('Erro na validação dos dados', $validator->errors());
    //     }
    //     $collaborator = Collaborator::create($input);
    //     return response()->json([
    //         'sucess' => true,
    //         'message' => 'Colaborador cadastrado com sucesso!',
    //         'collaborator' => $collaborator 
    //     ]);
    // }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        //
    }
}
