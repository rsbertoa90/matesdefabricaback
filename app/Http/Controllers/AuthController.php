<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Requests\UserLoginRequest;
use Illuminate\Support\Facades\Auth;
use App\User;
use Hash;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    //


    public function logout(){
        auth()->logout();
    }


    public function getUser(Request $request)
    {
        $user = auth()->user();
        if($user){
            return new UserResource($user);
        }
    }

   public function login(UserLoginRequest $request)
  { 
    
    $user = User::where('email',$request->email)->get()->first();
    $token = auth()->attempt($request->only(['email','password']));
    if (!$token)
    {
        return abort(401);
    }
    else{
        return (new UserResource($user))->additional([
            'meta'=>[
                'token' => $token,
            ]
        ]);
    };
  }

  public function csrf()
  {
      return csrf_token();
  }
}
