let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");

(function () {
    // let contador = 1;
    // let tiempo = 4000;
    // let flag = false;

    // let pintar = function () {
    //     console.log(contador)

    //     if (contador === 1) {
    //         s1.style.backgroundColor = 'var(--color-vioCla)';
    //         s2.style.backgroundColor = 'white';
    //         s3.style.backgroundColor = 'white';
    //         flag = false;
    //     }

    //     if (contador === 2) {
    //         s1.style.backgroundColor = 'white';
    //         s2.style.backgroundColor = 'var(--color-vioCla)';
    //         s3.style.backgroundColor = 'white';
    //         console.log(tiempo)
    //     }

    //     if (flag == true) {
    //         contador -= 2;
    //     }

    //     if (contador === 3) {
    //         s2.style.backgroundColor = 'white';
    //         s3.style.backgroundColor = 'var(--color-vioCla)';
    //         contador -= 2;
    //         flag = true;
    //         console.log(tiempo)
    //     }

    //     contador++;
    // };

    // s1.style.backgroundColor = 'var(--color-vioCla)';
    // contador++;
    // setInterval(pintar, tiempo);

    /*ESTA FUNCION LA UTILIZO PARA LA ANIMACION DE LOS TRES PUNTOS EN EL SLIDER*/



             /*///----------EXPLICACION DE LO QUE HACE PARA MI (:---------\\\*/

    /*Al no hacer el slider con js tuve que crear la animacion de los tres puntos con js
    Ya que esta tiende a retroceder en sus pasos al terminar y a su vez modifica su tiempo.
    el slider tiene un patron de animacion que es:
    (Secuencia de fotos: 1 - 2 - 3 - |2| - 1 - 2 - 3 - |2|...)
    (Secuencia de segundos: 4s, 4s, 6s, 4s, 6s, 4s, 6s....)
    el slider esta creado para durar 10 seg, pero al volver en sus pasos la ultima foto en vez
    de durar 4 seg dura 6, lo mismo le pasa a la primer foto en su regreso.*/
    
    /*La animacion comienza con un tiempo de 4s, pero cuando esta llega a su ultima foto tarda 6 seg
    en volver a estar parado en la segunda foto. a travez de un contador que solo puede tener como
    valor 1, 2 y 3 ya que modifico su valor con condiciones cuando necesito que sea necesario
    voy cambiandole el color a los diferentes puntos.
    Cuando el contador esta en 3, este disminuye en 2 y su delay incrementa en 6s, el contador 
    por cada vuelta se incrementa en uno, lo que nos da un resultado de 3 - 2 + 1 = 2.
    Es decir que vamos a pintar el circulo 2. en el if que se encarga de verificar si el contador es 2
    tambien se encarga de verificar si el delay esta en 6s, si este esta en 6s lo cambia a 4s
    y con la ayuda de un Flag auxiliar que comienza siendo false entra a otra condicion que se encarga
    de cambiar el valor al Flag principal, lo pasa de falso a verdadero. este Flag principal
    tiene como objetivo restarle 2 al contador, incrementar el delay en 6s y pasar a true al Flag auxiliar,
    este mismo pasa a true ya que si permanece en false al entrar en el contador == 2 este volver a poner el
    Flag principal en true y estarimos dando vueltas en el contador 1 y 2. este segundo flag tiene como 
    finalidad evitar que esto pase y que el contador pueda seguir una secuencia correcta. */ 

    let delay = 4000;
    let contador = 1;
    let flag = false;
    let flagDos = false;

    s1.style.backgroundColor = 'var(--color-vioCla)';
    contador++

    let timerId = setTimeout(function pintar() {

        if (flag == true && delay == 4000) {
            contador -= 2;
            delay = 6000;
            flagDos = true;
        }

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

            if(delay == 6000){          
               delay = 4000;
               if(flagDos != true){
                  flag = true;                   
               } else{
                  flagDos = false;   
               }               
            }            
        }        

        if (contador === 3) {
            s2.style.backgroundColor = 'white';
            s3.style.backgroundColor = 'var(--color-vioCla)';
            contador -= 2;            
            delay = 6000;
        }

        contador++;

        timerId = setTimeout(pintar, delay);

    }, delay);

}());


function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.img');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}