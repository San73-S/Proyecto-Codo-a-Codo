let formulario = document.getElementById('formu');
let inputs = document.querySelectorAll('#formu input');
let textarea = document.querySelectorAll('#formu textarea');

let expreciones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false
}

const validarFormulario = (e) => { 
    console.log(e.target.name);   
    switch (e.target.name){
        case "nombre":
            if (expreciones.nombre.test(e.target.value)){
                document.getElementById('formNom').classList.remove('rojo');
                document.getElementById('formNom').classList.add('vio');
                campos['nombre'] = true;
            } else{
               document.getElementById('formNom').classList.add('rojo');
               campos['nombre'] = false;
            }
        break;

        case "mail":
            if (expreciones.correo.test(e.target.value)){
                document.getElementById('formMail').classList.remove('rojo');
                document.getElementById('formMail').classList.add('vio');
                campos['correo'] = true;
            } else{
               document.getElementById('formMail').classList.add('rojo');
               campos['correo'] = false;
            }
        break;

        case "tel":
            if (expreciones.telefono.test(e.target.value)){
                document.getElementById('formTel').classList.remove('rojo');
                document.getElementById('formTel').classList.add('vio');
                campos['telefono'] = true;
            } else{
               document.getElementById('formTel').classList.add('rojo');
               campos['telefono'] = false;
            }
        break;

        case "mensaje":
            console.log(e.target.name);
            if (e.target.value != ""){
                document.getElementById('formArea').classList.remove('rojo');
                document.getElementById('formArea').classList.add('vio');
                campos['mensaje'] = true;
            } else{
               document.getElementById('formArea').classList.add('rojo');
               campos['mensaje'] = false;
            }
        break;
    }
}

textarea.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario );
    textarea.addEventListener('blur', validarFormulario );
});

inputs.forEach((inputs) => {
    inputs.addEventListener('keyup', validarFormulario );
    inputs.addEventListener('blur', validarFormulario );
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.correo && campos.telefono && campos.mensaje){
        formulario.reset();
    }
});