let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let contraIndicacionesMedicamento=document.getElementById("contraindicacionmedicamento")
let registroInvimaMedicamento=document.getElementById("registromedicamento")
let copagoMedicamento=document.getElementById("copagomedicamento")


let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

//4. detectamos acciones o eventos en el boton

botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioMedicamento={
        nombre:nombreMedicamento.value,
        presentacion:presentacionMedicamento.value,
        dosis:dosisMedicamento.value,
        laboratorio:laboratorioMedicamento.value,
        fechaCaducidad:fechaCaducidadMedicamento.value,
        contraIndicaciones:contraIndicacionesMedicamento.value,
        registroInvima:registroInvimaMedicamento.value,
        copago:copagoMedicamento.value
    }

    //6. se envian los datos al back

    console.log(datosFormularioMedicamento)
    
    Swal.fire({
        title: "Te has registrado",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})