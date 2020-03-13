const Conversion = (a) => {
    var numero = a;
    minutos = numero / 60;
    console.log("Los minutos son: " + minutos);
    horas = minutos / 60;
    console.log("Las horas son: " + horas);
    segundos = horas * 3600;
    console.log("Los segundos son: " + segundos);

    return numero;
};
console.log(Conversion(3600));