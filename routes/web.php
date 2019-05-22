<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* 
Route::get('/sitemap.xml','SitemapController@sitemap');


Route::middleware('CheckSuper')->prefix('super')->group(function(){

    Route::get('/failed-jobs','SuperController@failedJobsView');

    Route::get('/', 'SuperController@panel');

   

    Route::put('/metadata','MetadataController@update');
    Route::get('/products','AdminController@tableView');
});

 */
Route::middleware('CheckAdmin')->prefix('admin')->group(function(){

    Route::get('/lista-de-precios','PdfController@prices');

   /*  Route::get('/busquedas','AdminController@searchHistory'); */
    
    /* Route::get('/','AdminController@cotizador'); */
   /*  Route::get('/cotizador','AdminController@cotizador'); */

    Route::post('/category','CategoryController@create');
    Route::put('/category','CategoryController@update');


    Route::post('/product','ProductController@create');
    Route::put('/product','ProductController@update');
    Route::delete('/product/{id}','ProductController@destroy');
    
    Route::post('/product/image','ProductImageController@create')->middleware('OptimizeImages');
    Route::put('/productImage','ProductImageController@update');
    Route::delete('/product/image/{id}','ProductImageController@destroy');

    Route::put('/order','OrderController@edit');
   /*  Route::get('/ordenes','AdminController@orders'); */
    Route::get('/getOrders','OrderController@getOrders');

    Route::put('/config','ConfigController@update');

    Route::get('/pdf/{order}','OrderController@toPDF');
});

Route::get('/pdf/{order}','OrderController@toPDF');

Route::get('/descargar-lista-de-precios','PdfController@downloadPricesList');

/* Route::get('/home', function(){return redirect('/');}); */
/* 
Route::get('/cotizador','HomeController@cotizer');
Route::get('/regalos-empresariales','HomeController@regalosEmpresariales'); */

/* Route::post('/regalos-empresariales','MailController@regalosEmpresariales')->middleware('OptimizeImages');; */
/* 
Route::get('/franquicia','HomeController@franquicia'); */
/* Route::post('/franquicia','MailController@franquicia'); */
/* 
Route::get('/sucursales','HomeController@sucursales');
Route::get('/contacto','HomeController@contacto'); */

/* Route::get('/buscar','ProductController@searchResults'); */

Route::get('/logout',function(){
    Auth::logout();
    return redirect('/');
});
Auth::routes();


Route::get('/getUser','HomeController@getUser');


Route::post('/suscription','SuscriptionController@create');

/* ESTAS RUTAS SIEMPRE AL FINAL */

Route::get('/{any}','SinglePageController@index')->where('any', '.*');
/* 

Route::get('/{category}','CategoryController@detail');

Route::get('/{category}/{product}','ProductController@detail'); */