let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");

(function () {
    let contador = 1;
    let tiempo = 4000;
    let flag = false;

    let pintar = function () {
        console.log(contador)

        if (contador === 1) {
            s1.style.backgroundColor = 'var(--color-vioCla)';
            s2.style.backgroundColor = 'white';
            s3.style.backgroundColor = 'white';
            flag = false;
        }

        if (contador === 2) {
            s1.style.backgroundColor = 'white';
            s2.style.backgroundColor = 'var(--color-vioCla)';
            s3.style.backgroundColor = 'white';
            console.log(tiempo)
        }

        if(flag == true){
            contador -=2;
        }

        if (contador === 3) {
            s2.style.backgroundColor = 'white';
            s3.style.backgroundColor = 'var(--color-vioCla)';
            contador -= 2;
            flag = true;
            console.log(tiempo)
        }

        contador++;
    };

    s1.style.backgroundColor = 'var(--color-vioCla)';
    contador++;
    setInterval(pintar, tiempo);

//     let delay = 5000;

//     let timerId = setTimeout(function request() {
//   ...enviar solicitud...

//   if (solicitud fallida debido a sobrecarga del servidor) {
//         //aumentar el intervalo en la próxima ejecución
//         delay *= 2;
//     }

//     timerId = setTimeout(request, delay);

// }, delay);

}());