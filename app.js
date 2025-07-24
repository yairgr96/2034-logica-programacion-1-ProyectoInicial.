//Variables
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let palabra = 'vez';

//Bucle while. Mientras el número ingresado por el usuario sea diferente al número secreto, se repetirá el bucle.
while (numeroUsuario !== numeroSecreto) {

    //Solicitar al usuario un número
    numeroUsuario = prompt(`Introduce un número del 1 al 10`);
    //Acertar el número ingresado
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades! Has adivinado el número secreto. ${numeroSecreto} en ${intentos} ${palabra}.`)
        //Si el número ingresado es un número no válido
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert(`El número secreto es mayor`);
        } else {
            alert(`El número secreto es menor`);
        }
        //Contar los intentos
        intentos++;
        palabra = 'veces';
        if (intentos > 3) {
            alert(`Has superado el número máximo de intentos. El número secreto era ${numeroSecreto}.`);
            break;
        }
    }
}