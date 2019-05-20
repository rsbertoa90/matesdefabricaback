<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Category;
use PDF;
use Carbon\Carbon;
use View;

class GeneratePricesList implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $newPath;
    public function __construct($newPath)
    {
        //
        $this->newPath = $newPath;
    }


    public function imageEmbed($image)
    {
       

        // Read image path, convert to base64 encoding
        $imageData = base64_encode(file_get_contents($image));

        // Format the image SRC:  data:{mime};base64,{data};
        $src = 'data:'.mime_content_type($image).';base64,'.$imageData;

        // Echo out a sample image
       return $src;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path().$this->newPath;
        
        $categories =  Category::with('products.images')
                    ->with(['products' => function($q){
                        $q->where('paused',0);
                    }])
                    ->whereHas('products' , function($q){
                $q->where('paused',0)->orderBy('name');
            })->orderby('name')->get();


        $today = Carbon::now()->format('d/m/Y');
        
        $logo = $this->imageEmbed(public_path('/storage/images/app/logo.png'));
        
        $html = View::make('pdf.ListaDePrecios',compact('categories','today','logo'))->render();
        
        PDF::loadHTML($html)->save($path);
        

        


    }
}
