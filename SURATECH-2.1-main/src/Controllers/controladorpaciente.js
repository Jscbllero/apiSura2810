//capturar los datos de un formulario
/* por cada input, select, textarea del formulario se crea una variable*/

let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("fechapaciente")

//2. por cada variable debo utilizar DOM para asociar el html con js

//3. crear una variable para asociar el id del boton que tengo en html 

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//4. detectamos acciones o eventos en el boton

botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault();
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioPaciente={
        Nombres:nombrePaciente.value,
        FechaNacimiento:fechaNacimientoPaciente.value,
        Ciudad:ciudadPaciente.value,
        Correo:correoPaciente.value,
        Telefono:telefonoPaciente.value,
        IPS:ipsPaciente.value,
        FechaAfiliacion:fechaAfiliacionPaciente.value,
        GrupoIngreso:grupoIngresoPaciente.value
    }

    //6. se envian los datos al back

    console.log(datosFormularioPaciente)
    
    Swal.fire({
        title: "Te has registrado",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})