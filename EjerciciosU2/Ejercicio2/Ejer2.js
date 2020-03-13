let number = 10;


const rango = (a) => {
    var valor = a;
    if (valor >= 1 && valor <= 100) {
        console.log("El numero " + valor + " esta en rango de 1 a 100");
    } else {
        console.log("El numero " + valor + " esta duera del rango de 1 a 100");
    }
    return valor;
};
console.log(rango(12));