<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CollaboratorsController;
use App\Http\Resources\CollaboratorsResource;
use App\Http\Controllers\MachineController;
use App\Http\Controllers\PlaceController;
use App\Http\Resources\MachineResource;
use App\Http\Resources\PlaceResource;
use App\Models\Collaborator;
use App\Models\Machine;
use App\Models\Place;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/collaborators/create', [CollaboratorsController::class, 'create']);
Route::get('/collaborators/paginate', [CollaboratorsController::class, 'index']);
Route::get('/collaborators/show', [CollaboratorsController::class, 'show']);
Route::get('/collaborators/id', [CollaboratorsController::class, 'id']);

Route::get('/collaborators/{id}', function($id){
    return new CollaboratorsResource(Collaborator::findOrFail($id));
});


Route::post('/machines/create', [MachineController::class, 'create']);
Route::get('/machines/index', [MachineController::class, 'index']);
Route::get('/machines/paginate', [MachineController::class, 'paginate']);

Route::get('/machines/{id}', function($id){
    return new MachineResource(Machine::findOrFail($id));
});


Route::post('/places/create', [PlaceController::class, 'create']);
Route::get('/places/index', [PlaceController::class, 'index']);
Route::get('/places/paginate', [PlaceController::class, 'paginate']);

Route::get('/places/{id}', function($id){
    return new PlaceResource(Place::findOrFail($id));
});



