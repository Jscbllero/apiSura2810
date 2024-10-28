//capturar los datos de un formulario
/* por cada input, select, textarea del formulario se crea una variable*/

let nombreSignoVital=document.getElementById("")
let valorSignoVital=document.getElementById("")
let fechaMedidaSignoVital=document.getElementById("")


//2. por cada variable debo utilizar DOM para asociar el html con js

//3. crear una variable para asociar el id del boton que tengo en html 

let botonSignoVital=document.getElementById("")

//4. detectamos acciones o eventos en el boton

botonSignoVital.addEEventListener("click",function(evento){
    evento.preventDefault()
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioSignoVital={
        nombre:nombreSignoVital.value,
        valor:valorSignoVital.value,
        fechaMedida:fechaMedidaSignoVital.value
        
    }

    //6. se envian los datos al back

    console.log(datosFormularioSignoVital)
    
    Swal.fire({
        title: "Te has registrado",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})