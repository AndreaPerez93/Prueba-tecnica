function validar(){
    var categoria, nombre, descripcion, precio, ingredientes;
    categoria = document.getElementById("categoria").value;
    nombre = document.getElementById("nombre").value;
    descripcion = document.getElementById("descripcion").value;
    precio = document.getElementById("precio").value;
    ingredientes = document.getElementById("ingredientes").value;
    
    if(categoria == "" || nombre == "" || precio == "" || ingredientes == "")
        alert ("*Son Campos Obligatorios");
    

    var platillo = {};
    platillo = {
        categoria:categoria,
        nombre:nombre,
        descripcion:descripcion,
        precio:precio,
        ingredientes:ingredientes
    }
    agregar(platillo);

    form.reset();

    }

    function read(categoria){
        console.log(categoria);
        leerDatos(categoria);
    }

   
    
    