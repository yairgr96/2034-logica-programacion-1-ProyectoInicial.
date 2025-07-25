//Variables
let numeroMaximo = 10; //Número máximo del rango
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; //Genera un número aleatorio del 1 al 10
//Nota: Math.floor() redondea hacia abajo y Math.random() genera un número decimal
let numeroUsuario = 0;
let intentos = 1; //Número de intentos permitidos
//Palabra para pluralizar el mensaje final
let palabra = 'Intento';

//Bucle while. Mientras el número ingresado por el usuario sea diferente al número secreto, se repetirá el bucle.
while (numeroUsuario !== numeroSecreto) {

    //Solicitar al usuario un número
    numeroUsuario = parseInt(prompt(`Introduce un número del 1 al ${numeroMaximo}`));
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
        palabra = 'Intentos'; //Cambiar la palabra a plural
        //Si el número de intentos supera el máximo permitido
        if (intentos > 5) {
            alert(`Has superado el número máximo de intentos. El número secreto era ${numeroSecreto}.`);
            break;
        }
    }
}