let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionConsultorioMedico=document.getElementById("direccionmedico")
let finDeSemanaDisponibleMedico=document.getElementById("disponibilidadmedico")




let botonRegistroMedico=document.getElementById("botonregistromedico")

//4. detectamos acciones o eventos en el boton

botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault();
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioMedico={
        nombre:nombreMedico.value,
        matriculaProfesional:matriculaProfesionalMedico.value,
        especialidad:especialidadMedico.value,
        salario:salarioMedico.value,
        ips:ipsMedico.value,
        correo:correoMedico.value,
        telefono:telefonoMedico.value,
        direccionConsultorio:direccionConsultorioMedico.value,
        finDeSemanaDisponible:finDeSemanaDisponibleMedico.value
    }

    //6. se envian los datos al back

    console.log(datosFormularioMedico)
    
    Swal.fire({
        title: "Te has registrado",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})