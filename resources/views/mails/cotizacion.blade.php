@extends('mails.base')

@section('content')
    <div>
        <p>
           Hola {{$order->client}}, Recibimos tu pedido!
        </p>
        <p>
            Uno de  nuestros representantes se comunicara con vos a la brevedad para confirmar disponibilidad y darte los detalles para el pago.
        </p>
        <p>
            Te dejamos nuestro numero de contacto por cualquier consulta: 11 3008 5414
        </p>
        <p> 
            Si queres descargar una copia de tu presupuesto podes hacerlo en el siguiente enlace: 
        </p>
        <p>
            <a href="https://matesfabi.com/pdf/{{$order->id}}"> <span> --> Descargar tu presupuesto en PDF <-- </span>  </a>
        </p>
      
        <p>Gracias por elegir Mates Fabi!</p>

    </div>
@endsection