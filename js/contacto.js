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
                document.getElementById('errNom').style.display='none';
                campos['nombre'] = true;
            } else{
               document.getElementById('formNom').classList.add('rojo');
               document.getElementById('errNom').style.display='block';
               campos['nombre'] = false;
            }
        break;

        case "mail":
            if (expreciones.correo.test(e.target.value)){
                document.getElementById('formMail').classList.remove('rojo');
                document.getElementById('formMail').classList.add('vio');
                document.getElementById('errMail').style.display='none';
                campos['correo'] = true;
            } else{
               document.getElementById('formMail').classList.add('rojo');
               document.getElementById('errMail').style.display='block';
               campos['correo'] = false;
            }
        break;

        case "tel":
            if (expreciones.telefono.test(e.target.value)){
                document.getElementById('formTel').classList.remove('rojo');
                document.getElementById('formTel').classList.add('vio');
                document.getElementById('errTel').style.display='none';
                campos['telefono'] = true;
            } else{
               document.getElementById('formTel').classList.add('rojo');
               document.getElementById('errTel').style.display='block';
               campos['telefono'] = false;
            }
        break;

        case "mensaje":
            console.log(e.target.name);
            if (e.target.value != ""){
                document.getElementById('formArea').classList.remove('rojo');
                document.getElementById('formArea').classList.add('vio');
                document.getElementById('errMens').style.display='none';
                campos['mensaje'] = true;
            } else{
               document.getElementById('formArea').classList.add('rojo');
               document.getElementById('errMens').style.display='block';
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